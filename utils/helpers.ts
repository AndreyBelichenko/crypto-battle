import cryptoData from '../constants/cryptoData/cryptoData';

export const createAsyncActionType = (type: string) => ({
  ACTION: type,
  START: `${type}_START`,
  SUCCESS: `${type}_SUCCESS`,
  ERROR: `${type}_ERROR`,
});

export const writeCorrectUserData = (info: any) => ({ id: info.data.user._id,
  name: info.data.user.alias,
  avatar: info.data.user.avatar,
  numberOfVictories: info.data.user.numberOfVictories,
  access_token: info.token,
  isLoading: false,
});

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

export const sortArray = (array: any, id: string) => {
  const finalArray: any = [];
  array.map((item: any) => helpSortArray(finalArray, item, id));
  return finalArray;
};

export const helpSortArray = (finalArray: any, item: any, id: string) => {
  if (item.firstPlayer.userInfo._id === id || item.secondPlayer.userInfo._id === id) {
    finalArray.unshift(item);
  } else {
    finalArray.push(item);
  }
};
