const key = 'ae8598c7f6c60886bfd52c2ae60d4ada';

const location = { lat: '48.8534', lon: '2.3488' };
const regex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
const baseURL = 'https://my-json-server.typicode.com/xhundo/se_project_react';
const URL =
  process.env.NODE_ENV === 'production'
    ? 'https://api.wtwr-demo.students.nomoredomainssbs.ru'
    : 'http://localhost:3000';

const bgNight = 'weather__night';
const bgNightCloudy = 'weather__night-cloudy';
const bgNightRain = 'weather__night-rain';
const bgNightHeavy = 'weather__night-heavy-rain';
const bgNightSnow = 'weather__night-snow';
const bgNightFog = 'weather__night-fog';
const bgDayCloudy = 'weather__day-cloudy';
const bgDayRain = 'weather__day-rain';
const bgDayHeavy = 'weather__day-heavy-rain';
const bgDaySnow = 'weather__day-snow';
const bgdayFog = 'weather__day-fog';
const bgDay = 'weather__card';

export {
  key,
  location,
  bgNight,
  baseURL,
  bgDay,
  bgNightCloudy,
  bgNightRain,
  bgNightHeavy,
  bgNightSnow,
  bgNightFog,
  bgDayCloudy,
  bgDayRain,
  bgDayHeavy,
  bgDaySnow,
  bgdayFog,
  URL,
  regex,
};
