import { toast } from 'react-semantic-toasts';
import * as Cookies from 'js-cookie';

import * as action from '../actionTypes/actionTypes';
import {
  requestLogin,
  requestSidebars,
  requestLogout,
  requestGetBattles,
  requestUpdateUserData,
  requestUpdateUserToken,
  requestSendImage,
} from '../../../utils/apiHelpers';
import {
  writeCorrectUserData,
} from '../../../utils/helpers';

export const setAuthStoreUserData = (type: string, token: string) => (dispatch: any) => {
  return dispatch({
    type: action.AUTH_STORE_USER_DATA.ACTION,
    payload: {
      promise: requestLogin(type, token)
        .then((data: any) => {
          const UserData = writeCorrectUserData(data);
          Cookies.set('auth_token', data.token);
          Cookies.set('userData', UserData);
          return UserData;
        })
        .catch(() =>
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

export const SetAllBattlesConnect = (payload: any) => {
  return {
    payload,
    type: action.CONNECT_ITEM_ALL_BATTLES,
  };
};

export const SetAllBattlesCreate = (payload: any) => {
  return {
    payload,
    type: action.CREATE_ITEM_ALL_BATTLES,
  };
};

export const SetAllBattlesUpdate = (payload: any) => {
  return {
    payload,
    type: action.UPDATE_ITEM_ALL_BATTLES,
  };
};

export const StartFinishBattle = (payload: any) => {
  return {
    payload,
    type: action.START_FINISH_BATTLE,
  };
};

interface ParamsOfGetBattlesWaiting {
  skip: number;
  limit: number;
  sort: string;
  state: string;
}

export const SetRequestBattles = (payload: ParamsOfGetBattlesWaiting) => (dispatch: any) => {
  return dispatch({
    type: action.ALL_BATTLES_DATA.ACTION,
    payload: {
      promise: requestGetBattles(payload.skip, payload.limit, payload.sort, payload.state).catch(() =>
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

export const connectBattle = (type: string, skip?: number) => (dispatch: any) => {
  return dispatch({
    type: action.SHOW_MORE_CRYPTO.ACTION,
    payload: {
      promise: requestSidebars(type, skip),
    },
  });
};

// update user

interface IDataProps {
  id: string;
  alias: string;
  avatar: any;
}

export const SetUpdateStoreUserData = (data: IDataProps) => (dispatch: any, getState: any) => {
  const state = getState();
  const authToken = Cookies.get('auth_token');
  return dispatch({
    type: action.UPDATE_STORE_USER_DATA.ACTION,
    payload: {
      promise: requestUpdateUserToken(authToken)
        .then(() => {
          if (data.avatar) {
            return requestSendImage(authToken, data.avatar);
          }
        })
        .then((res) => {
          return requestUpdateUserData({ ...data, avatar: data.avatar ? res.image : state.user.userData.avatar });
        })
        .then((data) => {
          const UserData = writeCorrectUserData(data);
          Cookies.set('userData', UserData);
          return UserData;
        })
        .catch(() =>
          toast({
            type: 'error',
            icon: 'envelope',
            title: 'Error with getting data',
            description: 'Sorry for the inconvenience, we will fix it soon',
            animation: 'bounce',
            time: 5000,
          }),
        ),
    },
  });
};
