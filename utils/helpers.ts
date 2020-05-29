import * as Cookies from 'js-cookie';

export const createAsyncActionType = (type: string) => ({
  ACTION: type,
  START: `${type}_START`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const writeCorrectUserData = (info: any) => {
  const correctData = {
    id: info.data.user._id,
    name: info.data.user.alias,
    avatar: info.data.user.avatar,
    numberOfVictories: info.data.user.numberOfVictories,
    access_token: info.token,
    isLoading: false,
  };
  Cookies.set('userData', correctData);

  return correctData;
};
