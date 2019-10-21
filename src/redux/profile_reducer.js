import {usersAPI} from "../api/api";
import axios from "axios";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 5},
        {id: 2, message: 'It`s my first project', likesCount: 3},
        {id: 2, message: 'It`s my first project', likesCount: 3}
    ],
    newPostText: 'it-kamasutra.com',
    profile:null,
      contacts:[]


}

const profileReducer = (state=initialState,action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            }
        case SET_USER_PROFILE: {
            return {
                ...state,profile:action.profile

            }
        }


    default:
            return state
    }
}

export const onAddPostActionCreator = ()=> ({type: ADD_POST})
export const setUserProfile = (profile)=> ({type:SET_USER_PROFILE,profile:profile})
export const upDateNewPostTextActionCreator =(text)=> ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            debugger
            dispatch(setUserProfile(response.data))
        })
};





export default profileReducer;