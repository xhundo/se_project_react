import "../blocks/ClothesSection.css";
import React from "react";
import ItemCard from "./ItemCard";
import { weatherRange } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function ClothesSection({ cards, weather, cardClick, handleAddClick }) {
  const currentTemperatureUnit = React.useContext(
    CurrentTemperatureUnitContext
  );

  const currentTemp =
    currentTemperatureUnit === "F"
      ? weather?.temperature?.F
      : weather?.temperature?.C;
  return (
    <section className="clothes-section">
      <div className="clothes-section__items">
        <p className="clothes-section__text">Your items</p>
        <button className="clothes-section__btn" onClick={handleAddClick}>
          + Add new
        </button>
      </div>
      <ul className="clothes-section__cards">
        {cards
          .filter((card) => card.weather === weatherRange(currentTemp))
          .map((currentCard) => (
            <ItemCard
              key={currentCard.id}
              card={currentCard}
              cardClick={() => cardClick(currentCard)}
            />
          ))}
      </ul>
    </section>
  );
}

export default ClothesSection;
