import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";

function Main({ weather }) {
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
          <ItemCard />
        </section>
      </main>
    </>
  );
}

export default Main;
