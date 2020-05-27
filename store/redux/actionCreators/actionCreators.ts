import * as action from '../actionTypes/actionTypes';
import { requestLogin, requestSidebars } from '../../../utils/apiHelpers';

export const setAuthStoreUserData = (type: string, token: string) => (dispatch: any) => {
  return dispatch({
    type: action.AUTH_STORE_USER_DATA.ACTION,
    payload: {
      promise: requestLogin(type, token),
    },
  });
};

export const setAuthUserDataFromCookies = (payload: object) => {
  return {
    payload,
    type: action.AUTH_STORE_USER_COOKIES,
  };
};

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

// sidebar reducer

// export function setSidebarWarriors(payload: object): action.SetWarriorsSidebar {
//   return {
//     payload,
//     type: action.SET_WARRIORS_SIDEBAR,
//   };
// }

export const setSidebarWarriors = (type: string) => (dispatch: any) => {
  return dispatch({
    type: action.SET_WARRIORS_SIDEBAR.ACTION,
    payload: {
      promise: requestSidebars(type),
    },
  });
};

export const setSidebarCrypto = (type: string, skip: number | undefined) => (dispatch: any) => {
  return dispatch({
    type: action.SET_CRYPTO_SIDEBAR.ACTION,
    payload: {
      promise: requestSidebars(type, skip),
    },
  });
};
