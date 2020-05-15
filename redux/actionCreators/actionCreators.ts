import * as action from '../actionTypes/actionTypes';

export function setAuthUserData(payload: object): action.SetAuthUserData {
    return {
        type: action.AUTH_USER_DATA,
        payload: payload,
    };
};

export function setAuthStoreUserData(payload: object): action.SetAuthStoreUserData {
    return {
        type: action.AUTH_STORE_USER_DATA,
        payload: payload,
    };
};

export function logOut(): action.LogOut {
    return {
        type: action.LOG_OUT,
    };
};

export function logOutStore(): action.LogOutStore {
    return {
        type: action.LOG_OUT_STORE,
    };
};