import * as Cookies from 'js-cookie';
import cryptoData from '../constants/cryptoData/cryptoData';

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

export const returnCorrectCryptoData = (name: string, type: string) => {
  const data: any = cryptoData.find((item: any) => item.name === name);
  switch (type) {
    case 'flag':
      return data.flag;
    case 'person':
      return data.person;
    case 'logo':
      return data.logo;
    case 'mainColor':
      return data.mainColor;
    case 'progressColor':
      return data.progressColor;
    case 'cryptoCode':
      return data.cryptoCode;
    default:
      return;
  }
};

export const giveProgressPercent = (healthPoints: string, health: string) =>
  (Number(health) * 100) / Number(healthPoints);

export const arrayMove = (arr: any[], oldIndex: number, newIndex: number) => {
  if (newIndex >= arr.length) {
    let k = newIndex - arr.length + 1;
    while ((k -= 1)) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
};

export const setFirstPlace = (arr: any[], userId: string) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].firstPlayer.userInfo._id === userId || arr[i].secondPlayer.userInfo._id === userId) {
      return arrayMove(arr, i, 0);
    }
  }
};
