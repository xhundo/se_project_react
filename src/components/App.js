import "../blocks/App.css";
import Footer from "./Footer";
import Header from "./Header";
import ModalWithForm from "./ModalWithForm";
import { getWeather, filterWeather } from "../utils/weatherApi";
import React from "react";
import { key } from "../utils/constants";
import ItemModal from "./ItemModal";
import { location } from "../utils/constants";
import Main from "./Main";
import { defaultClothingItems } from "../utils/constants";

function App() {
  const [modalActive, setModalActive] = React.useState(null);
  const [clothingItems, setClothingItems] = React.useState([]);
  const [selectCard, setSelectedCard] = React.useState({});

  const handleAddClick = () => {
    setModalActive("create");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalActive("preview");
  };

  const handleClose = () => {
    setModalActive(null);
  };

  const handleCloseByEsc = (e) => {
    if (e.key === "Escape") {
      setModalActive(null);
    }
  };

  const handleCloseByTarget = (e) => {
    if (e.target === e.currentTarget) {
      setModalActive(null);
    }
  };

  const [weatherData, setWeatherData] = React.useState({});

  React.useEffect(() => {
    if (location.latitude && location.longitude) {
      getWeather(key, location)
        .then((data) => {
          setWeatherData(filterWeather(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <div className="App">
      <Header weather={weatherData} handleAddClick={handleAddClick} />
      <Main
        weather={weatherData}
        cards={clothingItems}
        handleCardClick={handleCardClick}
      />
      <Footer />
      <ModalWithForm
        isOpen={modalActive === "create"}
        title="New garment"
        name="create"
        buttonTxt="Add garment"
        onClose={handleClose}
        closeByEsc={handleCloseByEsc}
        closeModal={handleCloseByTarget}
      >
        <label className="modal__input-label">Name</label>
        <input
          className="modal__input"
          type="text"
          placeholder="Name"
          required
        />
        <label className="modal__input-label">Image</label>
        <input
          className="modal__input"
          type="url"
          placeholder="Image URL"
          required
        />
        <label className="modal__input-title">Select the weather type:</label>
        <label className="modal__input-text" htmlFor="hot">
          <input
            className="modal__input-radio"
            id="hot"
            type="radio"
            value="Hot"
          />
          Hot
        </label>
        <label className="modal__input-text" htmlFor="warm">
          <input
            className="modal__input-radio"
            id="warm"
            type="radio"
            value="Warm"
          />
          Warm
        </label>
        <label className="modal__input-text" htmlFor="cold">
          <input
            className="modal__input-radio"
            id="cold"
            type="radio"
            value="Cold"
          />
          Cold
        </label>
      </ModalWithForm>
      <ItemModal
        isOpen={modalActive === "preview"}
        card={selectCard}
        onClose={handleClose}
        closeByEsc={handleCloseByEsc}
        closeModal={handleCloseByTarget}
      />
    </div>
  );
}

export default App;
