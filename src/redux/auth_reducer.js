import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
    }

export const setAuthUserData = (userId,email,login,isFetching)=> ({type:SET_USERS_DATA,data:{userId,email,login,isFetching}})


export const getAuthUserData = () => (dispatch)=> {
    authAPI.loginUser()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
};



export default authReducer;