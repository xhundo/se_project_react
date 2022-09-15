import "../blocks/WeatherCard.css";

function WeatherCard({ weather }) {
  const bg = document.querySelector(".weather__card");
  if (weather.condition === 0) {
    bg.classList.add("weather__night");
  } else if (weather.condition === 1) {
    bg.classList.add("weather__card");
  }

  if (weather.condition === 0 && weather.conditions === "Partly cloudy") {
    bg.classList.add("weather__night-cloudy");
  } else if (
    weather.condition === 0 &&
    weather.conditions === "Moderate rain"
  ) {
    bg.classList.add("weather__night-rain");
  } else if (weather.condition === 0 && weather.conditions === "Heavy Rain") {
    bg.classList.add("weather__night-heavy-rain");
  } else if (weather.condition === 0 && weather.conditions === "Light snow") {
    bg.classList.add("weather__night-snow");
  } else if (weather.condition === 0 && weather.conditions === "Fog") {
    bg.classList.add("weather__night-fog");
  } else if (
    weather.condition === 1 &&
    weather.conditions === "Partly cloudy"
  ) {
    bg.classList.add("weather__day-cloudy");
  } else if (
    weather.condition === 1 &&
    weather.conditions === "Moderate rain"
  ) {
    bg.classList.add("weather__day-rain");
  } else if (weather.condition === 1 && weather.conditions === "Heavy rain") {
    bg.classList.add("weather__day-heavy-rain");
  } else if (weather.condition === 1 && weather.conditions === "Light snow") {
    bg.classList.add("weather__day-snow");
  } else if (weather.condition === 1 && weather.conditions === "Fog") {
    bg.classList.add("weather__day-fog");
  }

  return (
    <>
      <div className="weather__card">
        <p className="weather__temp">{weather.temperature}°F</p>
      </div>
    </>
  );
}

export default WeatherCard;
