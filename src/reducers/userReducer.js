import { LOGIN_USER, LOGOUT_USER, AUTH_USER, GET_USER_ID, GET_USER_NAME } from "../actions/types";

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { 
                ...state, 
                loginSuccess: action.payload,
            };
        case LOGOUT_USER:
            return { 
                ...state,
                success: action.payload
            };
        case AUTH_USER:
            return {
                ...state,
                isAuth: action.payload
            };
        case GET_USER_ID:
            return {
                ...state,
                userId: action.payload
            };
        case GET_USER_NAME:
            return {
                ...state,
                userName: action.payload
            };
        default:
            return state;
    }
}