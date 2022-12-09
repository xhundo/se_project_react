import '../blocks/ClothesSection.css';
import React, { useContext } from 'react';
import ItemCard from './ItemCard';
import { weatherRange } from '../utils/weatherApi';
import CurrentTemperatureUnitContext from '../contexts/CurrentTemperatureUnitContext';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function ClothesSection({
  cards,
  weather,
  cardClick,
  handleAddItemClick,
  onCardLike,
  isLoggedIn,
}) {
  const currentTemperatureUnit = React.useContext(
    CurrentTemperatureUnitContext,
  );

  const currentUser = useContext(CurrentUserContext);
  // const isOwn = cards._id === currentUser.id;
  // const clothingSectionCards = `clothes-section__cards ${
  //   isOwn ? `clothes-section__cards` : `clothes-section__cards-hidden`
  // }`;

  const currentTemp =
    currentTemperatureUnit === 'F'
      ? weather?.temperature?.F
      : weather?.temperature?.C;
  return (
    <section className="clothes-section">
      <div className="clothes-section__items">
        <p className="clothes-section__text">Your items</p>
        <button className="clothes-section__btn" onClick={handleAddItemClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__cards">
        {cards
          .filter((card) => card.weather === weatherRange(currentTemp))
          .map((currentCard) => (
            <ItemCard
              isLoggedIn={isLoggedIn}
              key={currentCard._id}
              card={currentCard}
              cardClick={() => cardClick(currentCard)}
              onCardLike={onCardLike}
            />
          ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
