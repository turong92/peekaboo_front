import * as type from './types';

export const loginAction = (userData) => {
    return {
        type: type.LOGIN_USER,
        userData,
        isLoggedIn: true
    };
};

export const logoutAction = () => {
    return {
        type: type.LOGOUT_USER,
        userData: {},
        isLoggedIn: false
    };
};