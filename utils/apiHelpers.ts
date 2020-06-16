import { SocketConnection } from '../socketConnection/socketConnection';
import * as Cookies from 'js-cookie';

export type UserSidebarType = {
  _id: string;
  alias: string;
  avatar: string;
  numberOfVictories: number;
};

export const requestLogin = (type: string, token: string) =>
  new Promise((resolve, reject) => {
    fetch(`http://crypto-battle.pp.ua/api/auth/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        access_token: token,
      }),
    })
      .then((res) =>
        res.json().then((data) => ({
          data,
          token: res.headers.get('access-token'),
        })),
      )
      .then((data) => {
        SocketConnection.getSocket().send(
          JSON.stringify({ method: 'connect_user', params: { playerID: data.data.user._id } }),
        );
        return resolve(data);
      })
      .catch((error) => reject(error));
  });

export const requestSidebars = (type: string, skip: number | undefined = 0) => {
  return new Promise((resolve, reject) => {
    fetch(`http://crypto-battle.pp.ua/api/${type}?skip=${skip}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const requestLogout = (token: number, id: number) =>
  new Promise((resolve, reject) => {
    fetch('http://crypto-battle.pp.ua/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'access-token': `${token}`,
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

export const requestGetBattles = (skip = 0, limit = 10, sort = 'desc', state = 'all') =>
  new Promise((resolve, reject) => {
    fetch(`http://crypto-battle.pp.ua/api/get-battles?skip=${+skip}&limit=${+limit}&sort=${sort}&state=${state}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

export const requestUpdateUserToken = (token: any) =>
  new Promise((resolve, reject) => {
    fetch('http://crypto-battle.pp.ua/api/validate-auth-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'access-token': token,
      },
    })
      .then((res) =>
        res.json().then(() => ({
          token: res.headers.get('access-token'),
        })),
      )
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

export const requestSendImage = (token: any, blob: any) => {
  const formData = new FormData();
  formData.append('file', blob);
  return fetch('http://crypto-battle.pp.ua/api/image', {
    method: 'POST',
    headers: {
      'access-token': token,
    },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => {
      // tslint:disable-next-line:no-console
      console.error('err', err);
      defaultMessage: "Couldn't upload image";
    });
};

interface IDataProps {
  id: string;
  alias: string;
  avatar: string;
}

export const requestUpdateUserData = (data: IDataProps) => {
  const authToken = Cookies.get('auth_token');
  return new Promise((resolve, reject) => {
    fetch('http://crypto-battle.pp.ua/api/update-user-info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'access-token': String(authToken),
      },
      body: JSON.stringify(data),
    })
      .then((res) =>
        res.json().then((data) => ({
          data,
          token: res.headers.get('access-token'),
        })),
      )
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
};

export const getActiveCard = (battleId: string | string[] | undefined) =>
  new Promise((resolve, reject) => {
    fetch(`http://crypto-battle.pp.ua/api/get-battles?battleID=${battleId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
