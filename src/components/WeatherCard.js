import React from "react";
import {
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
} from "../utils/constants";
import "../blocks/WeatherCard.css";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weather }) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext
  );

  const weatherData =
    (currentTemperatureUnit === "F"
      ? weather?.temperature?.F
      : weather?.temperature?.C) || null;

  let bgStyles = "weather__card";

  if (weather.condition === 0) {
    bgStyles = bgNight;
  } else if (weather.condition === 1) {
    bgStyles = bgStyles;
  }

  if (weather.condition === 0 && weather.conditions === "Partly cloudy") {
    bgStyles = bgNightCloudy;
  } else if (
    weather.condition === 0 &&
    weather.conditions === "Moderate rain"
  ) {
    bgStyles = bgNightRain;
  } else if (weather.condition === 0 && weather.conditions === "Heavy Rain") {
    bgStyles = bgNightHeavy;
  } else if (weather.condition === 0 && weather.conditions === "Light snow") {
    bgStyles = bgNightSnow;
  } else if (weather.condition === 0 && weather.conditions === "Fog") {
    bgStyles = bgNightFog;
  } else if (
    weather.condition === 1 &&
    weather.conditions === "Partly cloudy"
  ) {
    bgStyles = bgDayCloudy;
  } else if (
    weather.condition === 1 &&
    weather.conditions === "Moderate rain"
  ) {
    bgStyles = bgDayRain;
  } else if (weather.condition === 1 && weather.conditions === "Heavy rain") {
    bgStyles = bgDayHeavy;
  } else if (weather.condition === 1 && weather.conditions === "Light snow") {
    bgStyles = bgDaySnow;
  } else if (weather.condition === 1 && weather.conditions === "Fog") {
    bgStyles = bgdayFog;
  }

  return (
    <div className={bgStyles}>
      <p className="weather__temp">
        {weatherData}°{currentTemperatureUnit}
      </p>
    </div>
  );
}

export default WeatherCard;
