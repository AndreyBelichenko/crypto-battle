import * as action from '../actionTypes/actionTypes';

export function setAuthUserData(payload: object): action.SetAuthUserData {
  return {
    payload,
    type: action.AUTH_USER_DATA,
  };
}

export function setAuthStoreUserData(payload: object): action.SetAuthStoreUserData {
  return {
    payload,
    type: action.AUTH_STORE_USER_DATA,
  };
}

export function logOut(): action.LogOut {
  return {
    type: action.LOG_OUT,
  };
}

export function logOutStore(): action.LogOutStore {
  return {
    type: action.LOG_OUT_STORE,
  };
}
