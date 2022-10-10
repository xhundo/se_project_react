const weatherRange = (realTemp) => {
  if (realTemp >= 86) {
    return "hot";
  } else if (realTemp >= 66 && realTemp <= 85) {
    return "warm";
  } else if (realTemp <= 65) {
    return "cold";
  }
};

const getWeather = (apiKey, location) => {
  const parsedLocation = `${location.latitude},${location.longitude}`;
  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${parsedLocation}&days=1`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

const filterWeather = (data) => {
  if (!data) {
    return null;
  }

  const weather = {};

  weather.city = data.location.name;
  weather.temperature = {
    F: `${data.current.temp_f}`,
    C: `${data.current.temp_c}`,
  };
  weather.icon = data.current.condition.icon;
  weather.condition = data.current.is_day;
  weather.conditions = data.current.condition.text;
  return weather;
};

export { getWeather, filterWeather, weatherRange };
