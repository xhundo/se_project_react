import React from 'react';
import WeatherCard from './WeatherCard';
import ItemCard from './ItemCard';
import '../blocks/Main.css';
import { weatherRange } from '../utils/weatherApi';
import CurrentTemperatureUnitContext from '../contexts/CurrentTemperatureUnitContext';

function Main({ weather, cards, handleCardClick, onCardLike, user, loggedIn }) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext,
  );

  const currentTemp =
    currentTemperatureUnit === 'F'
      ? weather?.temperature?.F
      : weather?.temperature?.C;

  return (
    <main className="main">
      <section className="main__weather-card">
        <WeatherCard weather={weather} />
      </section>
      <p className="main__weather-status">
        {`Today is ${currentTemp}°${currentTemperatureUnit} / You may want to wear:`}
      </p>
      <section className="main__items">
        <ul className="main__list-items">
          {cards
            .filter((card) => card.weather === weatherRange(currentTemp))
            .map((currentCard) => (
              <ItemCard
                isLoggedIn={loggedIn}
                onCardLike={onCardLike}
                cUser={user}
                key={currentCard._id}
                card={currentCard}
                cardClick={() => handleCardClick(currentCard)}
              />
            ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
