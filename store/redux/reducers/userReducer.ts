import { writeCorrectUserData } from '../../../utils/helpers';

import * as actionTypes from '../actionTypes/actionTypes';

export type UserDataType = {
  id: number;
  name: string;
  avatar: string;
  numberOfVictories: number;
  access_token: number;
  isLoading: boolean;
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
    isLoading: false,
  },
};

export default function userReducer(state: InitialStateType = initialState, action: any): InitialStateType {
  switch (action.type) {
    case actionTypes.AUTH_STORE_USER_COOKIES:
      return { ...state, userData: action.payload };
    case actionTypes.AUTH_STORE_USER_DATA.START:
      return { ...state, userData: { ...state.userData, isLoading: true } };
    case actionTypes.AUTH_STORE_USER_DATA.SUCCESS:
      return { ...state, userData: writeCorrectUserData(action.payload) };
    case actionTypes.AUTH_STORE_USER_DATA.ERROR:
      return initialState;
    case actionTypes.LOG_OUT_STORE.START:
      return { ...state, userData: { ...state.userData, isLoading: true } };
    case actionTypes.LOG_OUT_STORE.SUCCESS:
      return initialState;
    case actionTypes.UPDATE_STORE_USER_DATA.SUCCESS: {
      // const userInfo = action.payload && action.payload.data && action.payload.data.user;
      console.log(action.payload)
      return { ...state, userData: writeCorrectUserData(action.payload) };
    }
    default:
      return state;
  }
}
