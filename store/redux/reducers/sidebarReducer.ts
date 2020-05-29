import * as actionTypes from '../actionTypes/actionTypes';

// export type UserSidebarType = {
//   id: string;
//   alias: string;
//   avatar: string;
//   numberOfVictories: number;
// };

export type SidebarReducerUsers = {
  hasMore: boolean;
  users: any;
  load: boolean;
};

export type SidebarReducerCrypto = {
  hasMore: boolean;
  crypto: any;
  load: boolean;
};

export type SidebarReducerType = {
  warriors: SidebarReducerUsers;
  crypto: SidebarReducerCrypto;
};

const initialState: SidebarReducerType = {
  warriors: {
    hasMore: false,
    users: [],
    load: false,
  },
  crypto: {
    hasMore: false,
    crypto: [],
    load: false,
  },
};

export default function sidebarReducer(state: SidebarReducerType = initialState, action: any): SidebarReducerType {
  switch (action.type) {
    case actionTypes.SHOW_MORE_CRYPTO.SUCCESS:
      return {
        ...state,
        crypto: {
          hasMore: action.payload.hasMore,
          crypto: [...state.crypto.crypto, ...action.payload.crypto],
          load: false,
        },
      };
    case actionTypes.SET_WARRIORS_SIDEBAR.START:
      return { ...state, warriors: { ...state.warriors, load: true } };
    case actionTypes.SET_WARRIORS_SIDEBAR.SUCCESS:
      return {
        ...state,
        warriors: {
          hasMore: action.payload.hasMore,
          users: action.payload.warriors,
          load: false,
        },
      };
    case actionTypes.SET_WARRIORS_SIDEBAR.ERROR:
      return initialState;
    case actionTypes.SET_CRYPTO_SIDEBAR.START:
      return { ...state, crypto: { ...state.crypto, load: true } };
    case actionTypes.SET_CRYPTO_SIDEBAR.SUCCESS:
      return {
        ...state,
        crypto: {
          hasMore: action.payload.hasMore,
          crypto: action.payload.crypto,
          load: false,
        },
      };
    case actionTypes.SET_CRYPTO_SIDEBAR.ERROR:
      return initialState;
    case actionTypes.SHOW_MORE_CRYPTO.START:
      return { ...state, crypto: { ...state.crypto, load: true } };
    // case actionTypes.SHOW_MORE_CRYPTO.SUCCESS:
    //   return {
    //     ...state,
    //     crypto: {
    //       hasMore: action.payload.hasMore,
    //       crypto: { ...state.crypto, ...action.payload.crypto },
    //       load: false,
    //     },
    //   };
    case actionTypes.SHOW_MORE_CRYPTO.ERROR:
      return initialState;
    default:
      return state;
  }
}
