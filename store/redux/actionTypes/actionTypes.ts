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

export const LOG_OUT_STORE = createAsyncActionType('LOG_OUT_STORE');

export const BATTLE_DATA = 'BATTLE_DATA';
export interface SetBattleData {
  type: typeof BATTLE_DATA;
  payload: object;
}

export const CLEAR_BATTLES = 'CLEAR_BATTLES';
export interface ClearBattles {
  type: typeof CLEAR_BATTLES;
}

// sidebarReducer

export const SET_WARRIORS_SIDEBAR = createAsyncActionType('SET_WARRIORS_SIDEBAR');

export const SET_CRYPTO_SIDEBAR = createAsyncActionType('SET_CRYPTO_SIDEBAR');

export const SHOW_MORE_CRYPTO = createAsyncActionType('SHOW_MORE_CRYPTO');
export const SHOW_MORE_WARRIORS = createAsyncActionType('SHOW_MORE_WARRIORS');
export const SHOW_LESS_WARRIORS = createAsyncActionType('SHOW_LESS_WARRIORS');

export const UPDATE_STORE_USER_DATA = createAsyncActionType('UPDATE_STORE_USER_DATA');
export interface SetUpdateStoreUserData {
  type: typeof UPDATE_STORE_USER_DATA;
  payload: object;
}
export const ALL_BATTLES_DATA = createAsyncActionType('ALL_BATTLES_DATA');
export const CONNECT_ITEM_ALL_BATTLES = 'CONNECT_ITEM_ALL_BATTLES';
export const CREATE_ITEM_ALL_BATTLES = 'CREATE_ITEM_ALL_BATTLES';
export const UPDATE_ITEM_ALL_BATTLES = 'UPDATE_ITEM_ALL_BATTLES';
export const START_FINISH_BATTLE = 'START_FINISH_BATTLE';
export const SHOW_LESS_CRYPTO = 'SHOW_LESS_CRYPTO';

export type actionType = SetAuthUserData | SetAuthStoreUserData | LogOut | SetBattleData | SetUpdateStoreUserData;
