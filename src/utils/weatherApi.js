const weatherRange = (realTemp) => {
  if (realTemp >= 86) {
    return 'hot';
  } else if (realTemp >= 66 && realTemp <= 85) {
    return 'warm';
  } else if (realTemp <= 65) {
    return 'cold';
  }
};

const getWeather = (apiKey, location) => {
  const parsedLocation = `${location.latitude},${location.longitude}`;
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${apiKey}&units=imperial`,
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
  console.log(data.weather[0].icon);
  console.log(Math.round(data.main.temp).toString().slice(0, 2));

  weather.city = data.name;
  weather.temperature = {
    F: `${Math.round(data.main.temp).toString().slice(0, 2)}`,
    C: `${Math.round(((data.main.temp - 32) * 5) / 9)
      .toString()
      .slice(0, 2)}`,
  };
  weather.icon = data.weather.icon;
  // weather.condition = data.current.is_day;
  weather.conditions = data.weather[0].description;
  return weather;
};

export { getWeather, filterWeather, weatherRange };
