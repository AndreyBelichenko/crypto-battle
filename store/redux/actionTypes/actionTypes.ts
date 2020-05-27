import { createAsyncActionType } from '../../../utils/helpers';

export const AUTH_USER_DATA = 'AUTH_USER_DATA';
export interface SetAuthUserData {
  type: typeof AUTH_USER_DATA;
  payload: {
    type: string;
    token: string;
  };
}

export const AUTH_STORE_USER_DATA = createAsyncActionType('AUTH_STORE_USER_DATA');
export interface SetAuthStoreUserData {
  type: typeof AUTH_STORE_USER_DATA;
  payload: object;
}

export const AUTH_STORE_USER_COOKIES = 'AUTH_STORE_USER_COOKIES';

export const LOG_OUT = 'LOG_OUT';
export interface LogOut {
  type: typeof LOG_OUT;
}

export const LOG_OUT_STORE = 'LOG_OUT_STORE';
export interface LogOutStore {
  type: typeof LOG_OUT_STORE;
}

// sidebarReducer

// export const SET_WARRIORS_SIDEBAR = 'SET_WARRIORS_SIDEBAR';
// export interface SetWarriorsSidebar {
//   payload: object;
//   type: typeof SET_WARRIORS_SIDEBAR;
// }

export const SET_WARRIORS_SIDEBAR = createAsyncActionType('SET_WARRIORS_SIDEBAR');

export const SET_CRYPTO_SIDEBAR = createAsyncActionType('SET_CRYPTO_SIDEBAR');

export type actionType = SetAuthUserData | SetAuthStoreUserData | LogOut | LogOutStore;
