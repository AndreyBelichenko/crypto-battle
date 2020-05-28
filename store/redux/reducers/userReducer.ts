import * as actionTypes from '../actionTypes/actionTypes';

export type UserDataType = {
  name: string;
  avatar: string;
};

export type InitialStateType = {
  userData: UserDataType | {};
};

const initialState: InitialStateType = {
  userData: {
    name: '',
    avatar: '',
  },
};

export default function userReducer(state: InitialStateType = initialState, action: any): InitialStateType {
  switch (action.type) {
    case actionTypes.AUTH_STORE_USER_DATA:
      return { userData: action.payload };
    case actionTypes.LOG_OUT_STORE:
      return { userData: initialState };
    default:
      return state;
  }
}
