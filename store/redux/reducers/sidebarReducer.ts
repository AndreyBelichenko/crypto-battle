import * as actionTypes from '../actionTypes/actionTypes';

export type UserSidebarType = {
  id: number;
  alias: string;
  avatar: string;
  numberOfVictories: number;
};

export type SidebarReducerUsers = {
  hasMore: boolean;
  users: [] | UserSidebarType;
};

export type SidebarReducerType = {
  warriors: SidebarReducerUsers;
};

const initialState: SidebarReducerType = {
  warriors: {
    hasMore: false,
    users: [],
  },
};

export default function sidebarReducer(state: SidebarReducerType = initialState, action: any): SidebarReducerType {
  switch (action.type) {
    case actionTypes.SET_WARRIORS_SIDEBAR:
      return {
        warriors: {
          hasMore: action.payload.hasMore,
          users: action.payload.users,
        },
      };
    default:
      return state;
  }
}
