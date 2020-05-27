export type UserSidebarType = {
  _id: string;
  alias: string;
  avatar: string;
  numberOfVictories: number;
};

export const requestLogin = (type: string, token: string) =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:3001/api/auth/${type}`, {
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
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

export const requestSidebars = (type: string, skip: number | undefined = 0) =>
  new Promise((resolve, reject) => {
    fetch(`http://localhost:3001/api/${type}?skip=${skip}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
