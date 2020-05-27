export const AUTH_USER_DATA = 'AUTH_USER_DATA';
export interface SetAuthUserData {
  type: typeof AUTH_USER_DATA;
  payload: object;
}

export const AUTH_STORE_USER_DATA = 'AUTH_STORE_USER_DATA';
export interface SetAuthStoreUserData {
  type: typeof AUTH_STORE_USER_DATA;
  payload: object;
}

export const LOG_OUT = 'LOG_OUT';
export interface LogOut {
  type: typeof LOG_OUT;
}

export const LOG_OUT_STORE = 'LOG_OUT_STORE';
export interface LogOutStore {
  type: typeof LOG_OUT_STORE;
}

// userReducer

// sidebarReducer

export const SET_WARRIORS_SIDEBAR = 'SET_WARRIORS_SIDEBAR';
export interface SetWarriorsSidebar {
  payload: object;
  type: typeof SET_WARRIORS_SIDEBAR;
}

export const BATTLE_DATA = 'BATTLE_DATA';
export interface SetBattleData {
  type: typeof BATTLE_DATA;
  payload: object;
}

export type actionType =
    | SetAuthUserData
    | SetAuthStoreUserData
    | LogOut
    | LogOutStore
    | SetBattleData
    | SetWarriorsSidebar;
