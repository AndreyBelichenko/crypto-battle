import * as actionTypes from '../actionTypes/actionTypes';
import Cookies from 'js-cookie';

const userDataCookie = Cookies.get('userData');
export type UserDataType = {
    name: string,
    avatar: string,
    email: string,
};

export type InitialStateType = {
    userData: UserDataType | {};
};

const initialState: InitialStateType = {
    userData: {
        name: typeof userDataCookie === 'string' ? JSON.parse(userDataCookie).name : '',
        avatar: typeof userDataCookie === 'string' ? JSON.parse(userDataCookie).avatar : '',
    },
};

export default function userReducer (
    state: InitialStateType = initialState,
    action: any,
): InitialStateType {
    switch (action.type){
        case actionTypes.AUTH_STORE_USER_DATA:
            return {userData: action.payload};
        case actionTypes.LOG_OUT_STORE: return initialState;
        default:
            return state;
    }
}