import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'SET_USERS_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth:false
};



const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,

            }
        default:
            return state
    }
    }

export const setAuthUserData = (userId,email,login, isAuth)=> ({type:SET_USERS_DATA,payload:{userId,email,login, isAuth}})
export const getAuthUserData = () => (dispatch)=> {

   return  authAPI.loginUser()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login,true))
            } else {

            }
        })
};

export const login = (email,password, rememberMe) => (dispatch)=> {



    authAPI.login(email,password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserData(email,password, rememberMe))
            } else {
               let message = response.data.messages.length >0 ? response.data.messages[0] : "Some error";
                  dispatch(stopSubmit("login", {_error: message}));
            }
        })
};

export const logout = () => (dispatch)=> {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setAuthUserData(null,null,null,false))
            }
        })
};



export default authReducer;