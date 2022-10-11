import "../blocks/App.css";
import Footer from "./Footer";
import AddItemModal from "./AddItemModal";
import Header from "./Header";
import ModalWithForm from "./ModalWithForm";
import { getWeather, filterWeather } from "../utils/weatherApi";
import React, { useState } from "react";
import { getItems, removeItems, addItems } from "../utils/Api";
import { key } from "../utils/constants";
import ItemModal from "./ItemModal";
import { location } from "../utils/constants";
import Main from "./Main";
import { baseURL } from "../utils/constants";
import Profile from "./Profile";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { Route, Switch } from "react-router-dom";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] =
    React.useState("F");

  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weather, setWeather] = React.useState();
  const [modalActive, setModalActive] = React.useState(null);
  const [clothingItems, setClothingItems] = React.useState([]);
  const [selectCard, setSelectedCard] = React.useState({});

  React.useEffect(() => {
    getItems(`${baseURL}`)
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    setName("");
    setImageUrl("");
    setWeather();
  }, [modalActive === "create"]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeImage = (e) => {
    setImageUrl(e.target.value);
  };

  const handleChangeWeather = (e) => {
    setWeather(e.target.value);
  };

  const handleAddClick = () => {
    setModalActive("create");
  };

  const handleAddItemSubmit = (name, imageUrl, weather) => {
    addItems(baseURL, name, imageUrl, weather)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCardDelete = (id) => {
    removeItems(baseURL, id)
      .then(() => {
        setClothingItems([...clothingItems.filter((item) => item.id !== id)]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddItemClick = () => {
    setModalActive("create-item");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemSubmit({ name, imageUrl, weather });
    handleClose();
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

  return (
    <div className="App">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header weather={weatherData} handleAddClick={handleAddClick} />
        <Switch>
          <Route path="/profile">
            <Profile
              weather={weatherData}
              cards={clothingItems}
              cardClick={handleCardClick}
              handleAddClick={handleAddItemClick}
            />
          </Route>
          <Route path="/">
            <Main
              weather={weatherData}
              cards={clothingItems}
              handleCardClick={handleCardClick}
            />
          </Route>
        </Switch>
        <Footer />
        <ModalWithForm
          isOpen={modalActive === "create"}
          title="New garment"
          name="create"
          buttonTxt="Add garment"
          onClose={handleClose}
          closeByEsc={handleCloseByEsc}
          closeModal={handleCloseByTarget}
          handleSubmit={handleSubmit}
        >
          <label className="modal__input-label">Name</label>
          <input
            className="modal__input"
            type="text"
            placeholder="Name"
            required
            onChange={handleChangeName}
          />
          <label className="modal__input-label">Image</label>
          <input
            className="modal__input"
            type="url"
            placeholder="Image URL"
            required
            onChange={handleChangeImage}
          />
          <label className="modal__input-title">Select the weather type:</label>
          <label className="modal__input-text" htmlFor="hot">
            <input
              className="modal__input-radio"
              id="hot"
              type="radio"
              value="hot"
              required
              onChange={handleChangeWeather}
            />
            Hot
          </label>
          <label className="modal__input-text" htmlFor="warm">
            <input
              className="modal__input-radio"
              id="warm"
              type="radio"
              value="warm"
              required
              onChange={handleChangeWeather}
            />
            Warm
          </label>
          <label className="modal__input-text" htmlFor="cold">
            <input
              className="modal__input-radio"
              id="cold"
              type="radio"
              value="cold"
              required
              onChange={handleChangeWeather}
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
          deleteCard={handleCardDelete}
        />
        <AddItemModal
          onAddItem={handleAddItemSubmit}
          closeModal={handleClose}
          closeByEsc={handleCloseByEsc}
          closeByTarget={handleCloseByTarget}
          isOpen={modalActive === "create-item"}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
