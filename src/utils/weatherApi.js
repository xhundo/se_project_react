const getWeather = (apiKey, location) => {
  const parsedLocation = `${location.latitude},${location.longitude}`;
  fetch(
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
  weather.temperature = data.current.temp_f;
  weather.icon = data.current.icon;
  return weather;
};

export { getWeather, filterWeather };
