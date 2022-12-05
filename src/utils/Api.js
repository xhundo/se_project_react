const checkRes = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error ${res.status}`);
  }
};

const getItems = (baseURL) => {
  return fetch(`${baseURL}/items`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkRes);
};

const addItems = (baseURL, name, imageUrl, weather, token) => {
  return fetch(`${baseURL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  }).then(checkRes);
};

const removeItems = (baseURL, id, token) => {
  return fetch(`${baseURL}/items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
};

const updateUser = (baseURL, name, avatar, token) => {
  return fetch(`${baseURL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkRes);
};

const addLike = (baseUrl, id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
};

const removeLike = (baseUrl, id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).then(checkRes);
};

export { getItems, addItems, removeItems, updateUser, addLike, removeLike };
