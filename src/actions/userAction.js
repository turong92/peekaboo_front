import { LOGIN_USER, LOGOUT_USER, AUTH_USER } from "./types";

const USER_URL = "/api/user";

export function loginUser(userData){
    const data = { userData:userData, isLoggedIn:true };

    return {
        type: LOGIN_USER,
        payload: data,
    };
}

export function logoutUser() {
    const data = null;

    return {
        type: LOGOUT_USER,
        payload: data,
    };
}

export function authUser(isLoggedIn) {
    //const data = request("post", USER_URL + "/auth");
    
    return {
        type: AUTH_USER,
        payload: isLoggedIn,
    };
}