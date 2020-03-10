import {profileAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'


export type InitialStateType = typeof initialState

type PostType = {
    id: number
    message: string,
    likesCount: number
}


type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
type PhotosType ={
    small:string | null
    large:string | null
}
type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos:PhotosType
}


const initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: 'It`s my first project', likesCount: 3},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    contacts: [],
    status: "",
    newPostText:''
};

const profileReducer = (state = initialState, action:any):InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile

            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(p => p.id !== action.postId)

            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state, profile: {...state.profile, photos:action.photos} as ProfileType

            }
        }


        default:
            return state
    }
};

type AddPostType = {
    type:typeof ADD_POST
    newPostText:string
}

type DeletePostType = {
    type:typeof DELETE_POST
    postId:number
}

type SetUserProfileType = {
    type:typeof SET_USER_PROFILE
    profile:ProfileType
}

type SetStatusType = {
    type: typeof SET_STATUS
    status: string
}

type savePhotoSuccess = {
    type:typeof SAVE_PHOTO_SUCCESS
    photos:PhotosType
}

//ac
export const onAddPostActionCreator = (newPostText:string):AddPostType => ({type: ADD_POST, newPostText})
export const deletePost = (postId:number):DeletePostType => ({type: DELETE_POST, postId})
export const setUserProfile = (profile:ProfileType):SetUserProfileType => ({type: SET_USER_PROFILE,profile})
export const setStatus = (status:string):SetStatusType => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos:PhotosType):savePhotoSuccess => ({type: SAVE_PHOTO_SUCCESS , photos})


//tc
export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))

};
export const getStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))

};
export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
};


export const savePhoto = (file:any) => async (dispatch:any) => {
    debugger
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
};

export const saveProfile = (profile:ProfileType) => async (dispatch:any,getState:any) => {
    const userId =  getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0])
    }
};


export default profileReducer;