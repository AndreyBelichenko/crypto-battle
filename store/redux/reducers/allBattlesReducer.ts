import * as actionTypes from '../actionTypes/actionTypes';

export type InitialStateType = {
  allBattleData: any[];
  isLoad: boolean;
  hasMore: boolean;
};

const initialState: InitialStateType = {
  allBattleData: [],
  isLoad: false,
  hasMore: true,
};

export default function allBattleReducer(state: InitialStateType = initialState, action: any) {
  switch (action.type) {
    case actionTypes.ALL_BATTLES_DATA.START:
      return { ...state, isLoad: true };
    case actionTypes.ALL_BATTLES_DATA.SUCCESS:
      return {
        ...state,
        allBattleData: [...state.allBattleData, ...action.payload.battles],
        hasMore: action.payload.hasMore,
        isLoad: false,
      };
    case actionTypes.ALL_BATTLES_DATA.ERROR:
      return initialState;
    case actionTypes.CONNECT_ITEM_ALL_BATTLES:
      return {
        ...state,
        allBattleData: state.allBattleData.map((item) =>
          item._id === action.payload._id ? { ...action.payload } : item,
        ),
      };
    case actionTypes.UPDATE_ITEM_ALL_BATTLES:
      return {
        ...state,
        allBattleData: state.allBattleData.map((item) =>
          item._id === action.payload._id ? { ...item, steps: action.payload.steps } : item,
        ),
      };
    case actionTypes.START_FINISH_BATTLE:
      const allBattleData = state.allBattleData.map((item) =>
        item._id === action.payload._id ? { ...item, gameStatus: action.payload.gameStatus } : item,
      );
      return { ...state, allBattleData };
    case actionTypes.CREATE_ITEM_ALL_BATTLES:
      return {
        ...state,
        allBattleData: [{ ...action.payload }, ...state.allBattleData],
      };
    case actionTypes.CLEAR_BATTLES:
      return {
        ...state,
        allBattleData: [],
      };
    default:
      return state;
  }
}
