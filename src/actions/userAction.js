import * as user from "./types";

const USER_URL = "/api/user";

export function loginUser(userData){
    const data = { userData:userData, isLoggedIn:true };

    return {
        type: user.LOGIN_USER,
        payload: data,
    };
}

export function logoutUser() {
    const data = null;

    return {
        type: user.LOGOUT_USER,
        payload: data,
    };
}

export function authUser(isLoggedIn) {
    //const data = request("post", USER_URL + "/auth");
    
    return {
        type: user.AUTH_USER,
        payload: isLoggedIn,
    };
}

export function getUserId() {
    const data = window.localStorage.getItem("userId");

    return {
        type: user.GET_USER_ID,
        payload: data,  
    };
}

export function getUserName() {
    const data = window.localStorage.getItem("userName");

    return {
        type: user.GET_USER_NAME,
        payload: data,
    };
}