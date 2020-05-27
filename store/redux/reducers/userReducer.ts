import * as Cookies from 'js-cookie';

import * as actionTypes from '../actionTypes/actionTypes';

export type UserDataType = {
  id: number;
  name: string;
  avatar: string;
  numberOfVictories: number;
  access_token: number;
};

export type InitialStateType = {
  userData: UserDataType;
};

const initialState: InitialStateType = {
  userData: {
    id: 0,
    name: '',
    avatar: '',
    numberOfVictories: 0,
    access_token: 0,
  },
};

export default function userReducer(state: InitialStateType = initialState, action: any): InitialStateType {
  switch (action.type) {
    case actionTypes.AUTH_STORE_USER_COOKIES:
      return { userData: action.payload };
    case actionTypes.AUTH_STORE_USER_DATA.SUCCESS:
      return { userData: writeCorrectUserData(action.payload) };
    case actionTypes.AUTH_STORE_USER_DATA.ERROR:
      return initialState;
    case actionTypes.LOG_OUT_STORE:
      return initialState;
    default:
      return state;
  }
}

const writeCorrectUserData = (info: any) => {
  const correctData = {
    id: info.data.user._id,
    name: info.data.user.alias,
    avatar: info.data.user.avatar,
    numberOfVictories: info.data.user.numberOfVictories,
    access_token: info.token,
  };
  Cookies.set('userData', correctData);
  return correctData;
};
