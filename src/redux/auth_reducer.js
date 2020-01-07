import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USERS_DATA = 'social-network/auth/SET_USERS_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'social-network/auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null // if null, then captcha is not required
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
};
//AC
export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USERS_DATA,
    payload: {userId, email, login, isAuth}
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}
});



//tc
export const getAuthUserData = () => async (dispatch) => { // асинхронная функция автоматом возвращает промис
    let response = await authAPI.loginUser();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    } else {
    }
};

export const login = (email, password, rememberMe,captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())

    } else {
        if (response.data.resultCode === 10){
            dispatch(getCaptchaUrl())
        }

        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
    }
};


export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    }


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};


export default authReducer;