const key = "f586cc9ee1aa4376b9115511221809";

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
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/cap.jpg?etag=cf33d6ac81f0613c13a5c403fc7c62da",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "warm",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/hoodie.jpg?etag=1f3d3c1a154f7a9e07bd78a8f6952d9e",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/jacket.jpg?etag=e2e17fc1352115d2e59511b380fccae9",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/sneakers.jpg?etag=56322fb0e0f745439c1d344c253c6855",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/t-shirt.jpg?etag=0f94f1c569bd19d95860902fcc5c70b3",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/winter-coat.jpg?etag=2a959245bf5291c50cdbd4fcefb25a21",
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
