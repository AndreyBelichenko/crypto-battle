import { toast } from 'react-semantic-toasts';

import * as action from '../actionTypes/actionTypes';
import { requestLogin, requestSidebars, requestLogout } from '../../../utils/apiHelpers';

export const setAuthStoreUserData = (type: string, token: string) => (dispatch: any) => {
  return dispatch({
    type: action.AUTH_STORE_USER_DATA.ACTION,
    payload: {
      promise: requestLogin(type, token).catch(() =>
        toast({
          type: 'error',
          icon: 'envelope',
          title: 'Error with authorization',
          description: 'Sorry for the inconvenience, we will fix it soon',
          animation: 'bounce',
          time: 5000,
        }),
      ),
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

export const logOutStore = (token: number, id: number) => (dispatch: any) => {
  return dispatch({
    type: action.LOG_OUT_STORE.ACTION,
    payload: {
      promise: requestLogout(token, id).catch(() =>
        toast({
          type: 'error',
          icon: 'envelope',
          title: 'Error with logout',
          description: 'Sorry for the inconvenience, we will fix it soon',
          animation: 'bounce',
          time: 5000,
        }),
      ),
    },
  });
};

export function SetBattleData(payload: object): action.SetBattleData {
  return {
    payload,
    type: action.BATTLE_DATA,
  };
}

// sidebar reducer

export const setSidebarWarriors = (type: string) => (dispatch: any) => {
  const messageError = type === 'top-crypto' ? 'TOP crypto' : 'TOP warriors';
  return dispatch({
    type: action.SET_WARRIORS_SIDEBAR.ACTION,
    payload: {
      promise: requestSidebars(type).catch(() =>
        toast({
          type: 'error',
          icon: 'envelope',
          title: `Error with getting ${messageError}`,
          description: 'Sorry for the inconvenience, we will fix it soon',
          animation: 'bounce',
          time: 5000,
        }),
      ),
    },
  });
};

export const setSidebarCrypto = (type: string, skip?: number) => (dispatch: any) => {
  const messageError = type === 'top-crypto' ? 'TOP crypto' : 'TOP warriors';
  return dispatch({
    type: action.SET_CRYPTO_SIDEBAR.ACTION,
    payload: {
      promise: requestSidebars(type, skip).catch(() =>
        toast({
          type: 'error',
          icon: 'envelope',
          title: `Error with getting ${messageError}`,
          description: 'Sorry for the inconvenience, we will fix it soon',
          animation: 'bounce',
          time: 5000,
        }),
      ),
    },
  });
};

export const showMoreCrypto = (type: string, skip?: number) => (dispatch: any) => {
  return dispatch({
    type: action.SHOW_MORE_CRYPTO.ACTION,
    payload: {
      promise: requestSidebars(type, skip),
    },
  });
};
