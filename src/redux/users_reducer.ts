import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../Utils/object_helpers";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type InitialStateType = typeof initialState

const initialState = {
    users: [] as Array<UserType>,
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: true,
        followingInProgress: [] as Array<number>//array of users id
};


const usersReducer = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users,action.userId,"id",{followed: true})

            };

        case UNFOLLOW:
            return {
                ...state,
               users: updateObjectInArray(state.users,action.userId,"id",{followed: false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
};


type FollowSuccuessType = {
    type:typeof FOLLOW
    userId:number
}
type UnfollowSuccuessType = {
    type:typeof UNFOLLOW
    userId:number
}
type SetUsersType ={
    type :typeof SET_USERS
    users:Array<UserType>
}
type SetCurrentPageType  = {
    type:typeof SET_CURRENT_PAGE
    currentPage:number
}
type SetTotalUsersCount = {
    type:typeof SET_TOTAL_USERS_COUNT
    count:number
}
type ToggleIsFetching = {
    type:typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
type toggleFollowingProgress = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const followSuccuess = (userId:number):FollowSuccuessType=> ({type: FOLLOW, userId})
export const unfollowSuccuess = (userId:number):UnfollowSuccuessType => ({type: UNFOLLOW, userId})
export const setUsers = (users:Array<UserType>):SetUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage:number):SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount:number):SetTotalUsersCount => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (isFetching:boolean):ToggleIsFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching:boolean, userId:number):toggleFollowingProgress => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const requestUsers = (page:number, pageSize:number) => {
    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        let data = await usersAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }

};


//рефакторинг для follow/unfollow
const followUnfollowFlow =async (dispatch:any,userId:number,apiMethod:any,actionCreator:any)=> {
        dispatch(toggleFollowingProgress(true, userId))
        let response = await apiMethod(userId)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
};

export const follow = (userId:number) => {
    return async (dispatch:any) => {
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),followSuccuess);
    }
};

export const unfollow = (userId:number) => {
    return async (dispatch:any) => {
        followUnfollowFlow(dispatch,userId,usersAPI.follow.bind(usersAPI),unfollowSuccuess);
    }
};

export default usersReducer;