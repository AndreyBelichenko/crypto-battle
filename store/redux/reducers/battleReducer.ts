import * as actionTypes from '../actionTypes/actionTypes';

export type BattleDataType = {
  battle: boolean;
};

export type InitialStateType = {
  battleData: boolean | {};
};

const initialState: InitialStateType = {
  battleData:  false,
};

export default function battleReducer(state: InitialStateType = initialState, action: any) {
  switch (action.type) {
    case actionTypes.BATTLE_DATA:
      (console.log(initialState));
      return { battleData: action.payload };
    default:
      return state;
  }
}
