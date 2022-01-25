const BASE_URL = 'https://frontend-test-api.aircall.io/';

const authenticate = () => {
  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      username: 'Dinno',
      password: 'crebdrug'
    })
  };

  return fetch(BASE_URL + 'auth/login', configurationObject);
};

const refreshAuthentication = refreshToken => {
  const configurationObject = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${refreshToken}`
    },
    body: JSON.stringify({
      username: 'Dinno',
      password: 'crebdrug'
    })
  };

  return fetch(BASE_URL + 'auth/refresh-token-v2', configurationObject);
};

const getCalls = (authToken, offset) => {
  // if statement for when displaying certain number of paqges
  return fetch(BASE_URL + `calls?offset=${offset}&limit=7`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
};

export default {
  authenticate,
  refreshAuthentication,
  getCalls
};
