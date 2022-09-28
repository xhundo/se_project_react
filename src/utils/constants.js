const key = "6b57ab795dd8411b86233312222809";

const location = { latitude: "48.87", longitude: "2.33" };

const bgNight = "weather__night";
const bgNightCloudy = "weather__night-cloudy";
const bgNightRain = "weather__night-rain";
const bgNightHeavy = "weather__night-heavy-rain";
const bgNightSnow = "weather__night-snow";
const bgNightFog = "weather__night-fog";
const bgDayCloudy = "weather__day-cloudy";
const bgDayRain = "weather__day-rain";
const bgDayHeavy = "weather__day-heavy-rain";
const bgDaySnow = "weather__day-snow";
const bgdayFog = "weather__day-fog";

const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  },
];

export {
  key,
  location,
  defaultClothingItems,
  bgNight,
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
};
