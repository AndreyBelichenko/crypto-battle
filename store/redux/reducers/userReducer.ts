import { writeCorrectUserData } from '../../../utils/helpers';

import * as actionTypes from '../actionTypes/actionTypes';

export type UserDataType = {
  id: number;
  name: string;
  avatar: string;
  numberOfVictories: number;
  access_token: number;
  loaded: boolean;
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
    loaded: false,
  },
};

export default function userReducer(state: InitialStateType = initialState, action: any): InitialStateType {
  switch (action.type) {
    case actionTypes.AUTH_STORE_USER_COOKIES:
      return { ...state, userData: action.payload };
    case actionTypes.AUTH_STORE_USER_DATA.START:
      return { ...state, userData: { ...state.userData, loaded: true } };
    case actionTypes.AUTH_STORE_USER_DATA.SUCCESS:
      return { ...state, userData: writeCorrectUserData(action.payload) };
    case actionTypes.AUTH_STORE_USER_DATA.ERROR:
      return initialState;
    case actionTypes.LOG_OUT_STORE.START:
      return { ...state, userData: { ...state.userData, loaded: true } };
    case actionTypes.LOG_OUT_STORE.SUCCESS:
      return initialState;
    default:
      return state;
  }
}
