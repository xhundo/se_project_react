const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  } else if (res.status === 401) {
    throw new Error('Invalid email or password');
  } else if (res.status === 409) {
    throw new Error('User already exists');
  }
};

export const register = (baseUrl, name, avatar, email, password) => {
  return fetch(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(checkRes);
};

export const authorization = (baseUrl, email, password) => {
  return fetch(`${baseUrl}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkRes)
    .then((data) => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        return data;
      }
    });
};

export const getContent = (baseURL, token) => {
  return fetch(`${baseURL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  })
    .then(checkRes)
    .then((data) => {
      return data;
    });
};
