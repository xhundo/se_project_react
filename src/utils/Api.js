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
      "Content-Type": "application/json",
    },
  }).then(checkRes);
};

const addItems = (baseURL, name, imageUrl, weather) => {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name, imageUrl, weather),
  }).then(checkRes);
};

const removeItems = (baseURL, id) => {
  return fetch(`${baseURL}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkRes);
};

export { getItems, addItems, removeItems };
