import { toast } from 'react-semantic-toasts';

export type UserSidebarType = {
  _id: string;
  alias: string;
  avatar: string;
  numberOfVictories: number;
};

export const requestLogin = (type: string, token: string) =>
  new Promise((resolve) => {
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
        }))
      )
      .then((data) => resolve(data))
      .catch(() =>
        toast({
          type: 'error',
          icon: 'envelope',
          title: 'Error with authorization',
          description: 'Sorry for the inconvenience, we will fix it soon',
          animation: 'bounce',
          time: 5000,
        })
      );
  });

export const requestSidebars = (type: string, skip: number | undefined = 0) => {
  const messageError = type === 'top-crypto' ? 'TOP crypto' : 'TOP warriors';
  return new Promise((resolve) => {
    fetch(`http://crypto-battle.pp.ua/api/${type}?skip=${skip}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(() =>
        toast({
          type: 'error',
          icon: 'envelope',
          title: `Error with getting ${messageError}`,
          description: 'Sorry for the inconvenience, we will fix it soon',
          animation: 'bounce',
          time: 5000,
        })
      );
  });
};
