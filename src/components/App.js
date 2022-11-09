import '../blocks/App.css';
import '../vendor/fonts/fonts.css';
import Footer from './Footer';
import AddItemModal from './AddItemModal';
import Header from './Header';
import ModalWithForm from './ModalWithForm';
import { getWeather, filterWeather } from '../utils/weatherApi';
import React, { useState, useEffect } from 'react';
import { getItems, removeItems, addItems } from '../utils/Api';
import { key } from '../utils/constants';
import ItemModal from './ItemModal';
import { location } from '../utils/constants';
import Main from './Main';
import { baseURL } from '../utils/constants';
import Profile from './Profile';
import CurrentTemperatureUnitContext from '../contexts/CurrentTemperatureUnitContext';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [modalActive, setModalActive] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [selectCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [isAddClothingModalOpen, setIsAddClothingModalOpen] = useState(false);

  useEffect(() => {
    getItems(`${baseURL}`)
      .then((items) => {
        setClothingItems(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (isAddClothingModalOpen || modalActive) {
      document.addEventListener('keydown', handleCloseByEsc);
    } else {
      document.removeEventListener('keydown', handleCloseByEsc);
    }
  });

  useEffect(() => {
    if (location.lat && location.lon) {
      getWeather(key, location)
        .then((data) => {
          setWeatherData(filterWeather(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleAddClick = () => {
    setIsAddClothingModalOpen(true);
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
        setClothingItems((state) => {
          return [...state.filter((item) => item.id !== id)];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddItemModal = () => {
    setIsAddClothingModalOpen(true);
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === 'F'
      ? setCurrentTemperatureUnit('C')
      : setCurrentTemperatureUnit('F');
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalActive('preview');
  };

  const handleClose = () => {
    setModalActive(null);
    setIsAddClothingModalOpen(false);
  };

  const handleCloseByEsc = (e) => {
    if (e.key === 'Escape') {
      setModalActive(null);
      setIsAddClothingModalOpen(false);
    }
  };

  const handleCloseByTarget = (e) => {
    if (e.target === e.currentTarget) {
      setModalActive(null);
      setIsAddClothingModalOpen(false);
    }
  };

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
              handleAddItemModal={handleAddItemModal}
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
          isOpen={isAddClothingModalOpen}
          title="New garment"
          name="create"
          buttonTxt="Add garment"
          onClose={handleClose}
          closeByEsc={handleCloseByEsc}
          closeModal={handleCloseByTarget}
          onAddItem={handleAddItemSubmit}
        />
        <ItemModal
          isOpen={modalActive === 'preview'}
          card={selectCard}
          onClose={handleClose}
          closeByEsc={handleCloseByEsc}
          closeModal={handleCloseByTarget}
          deleteCard={handleCardDelete}
        />
        <AddItemModal
          closeModal={handleClose}
          closeByEsc={handleCloseByEsc}
          closeByTarget={handleCloseByTarget}
          isOpen={isAddClothingModalOpen}
          onAddItem={handleAddItemSubmit}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
