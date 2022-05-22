let accessToken = null;

export const getAccessToken = () => {
  if (!accessToken) {
    accessToken = window.localStorage.getItem('accessToken');
  }

  return accessToken;
};

export const setAccessToken = (token, saveToLocalStorage = false) => {
  accessToken = token;

  if (saveToLocalStorage) {
    window.localStorage.setItem('accessToken', accessToken);
  }
};
