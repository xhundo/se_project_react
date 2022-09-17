import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";
import { weatherRange } from "../utils/weatherApi";

function Main({ weather, cards }) {
  const currentTemp = weather.temperature;

  return (
    <>
      <main className="main">
        <section className="main__weather-card">
          <WeatherCard weather={weather} />
        </section>
        <p className="main__weather-status">
          Today is {weather.temperature}°F / You may want to wear:
        </p>
        <section className="main__items">
          <ul className="main__list-items">
            {cards
              .filter((card) => card.weather === weatherRange(currentTemp))
              .map((currentCard) => (
                <ItemCard key={currentCard._id} card={currentCard} />
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
