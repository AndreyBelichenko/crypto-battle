import * as action from '../actionTypes/actionTypes';

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

// sidebar reducer

export function setSidebarWarriors(payload: object): action.SetWarriorsSidebar {
  return {
    payload,
    type: action.SET_WARRIORS_SIDEBAR,
  };
}

export function SetBattleData(payload: object): action.SetBattleData {
  return {
    payload,
    type: action.BATTLE_DATA,
  };
}
