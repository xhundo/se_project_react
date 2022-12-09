import '../blocks/App.css';
import '../vendor/fonts/fonts.css';
import Footer from './Footer';
import AddItemModal from './AddItemModal';
import Header from './Header';
import ModalWithForm from './ModalWithForm';
import { Route, Switch } from 'react-router-dom';
import { getWeather, filterWeather } from '../utils/weatherApi';
import React, { useState, useEffect } from 'react';
import {
  getItems,
  removeItems,
  addItems,
  updateUser,
  addLike,
  removeLike,
} from '../utils/Api';
import { key, URL } from '../utils/constants';
import ItemModal from './ItemModal';
import { location } from '../utils/constants';
import Main from './Main';
import Profile from './Profile';
import RegisterModal from './RegisterModal';
import ProtectedRoute from './ProtectedRoute';
import CurrentTemperatureUnitContext from '../contexts/CurrentTemperatureUnitContext';
import * as auth from '../utils/auth.js';
import LoginModal from './LoginModal';
import EditProfileModal from './EditProfileModal';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

/* You selected the wrong weather type thats why your item does not show up in clothes. The current weather type is cold */

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
  const [modalActive, setModalActive] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [selectCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [isLoggedIn, setIsLoggedin] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    avatar: '',
    id: '',
  });
  const [isAddClothingModalOpen, setIsAddClothingModalOpen] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [showLoginError, setShowLoginError] = useState(false);

  useEffect(() => {
    getItems(`${URL}`)
      .then((items) => {
        setClothingItems(items[0].data);
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

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const jwt = localStorage.getItem('token');
      setIsLoggedin(true);
      auth
        .getContent(URL, jwt)
        .then((res) => {
          setCurrentUser({
            name: res?.data?.name,
            avatar: res?.data?.avatar,
            id: res?.data?._id,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [isLoggedIn]);

  const handleAddClick = () => {
    setIsAddClothingModalOpen(true);
  };

  const handleLoginError = () => {
    setShowLoginError(false);
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather, token }) => {
    addItems(URL, name, imageUrl, weather, token)
      .then((item) => {
        setClothingItems([item.data, ...clothingItems]);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setIsLoggedin(false);
  };

  const handleCardDelete = (id, token) => {
    removeItems(URL, id, token)
      .then(() => {
        setClothingItems((state) => {
          return [...state.filter((item) => item._id !== id)];
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRegistration = async (name, avatar, email, password) => {
    return auth
      .register(URL, name, avatar, email, password)
      .then((data) => {
        setIsLoggedin(true);
        setCurrentUser({ name: data.name, avatar: data.avatar });
        handleClose();
      })
      .catch((e) => {
        setIsLoggedin(false);
        console.log(e);
      });
  };

  const handleAuth = async (email, password) => {
    setShowLoginError(false);
    return auth
      .authorization(URL, email, password)
      .then(() => {
        handleClose();
        setIsLoggedin(true);
      })
      .catch((e) => {
        console.log(e);
        setShowLoginError(true);
      });
  };

  const handleProfileUpdate = async ({ name, avatar, token }) => {
    updateUser(URL, name, avatar, token)
      .then((res) => {
        setCurrentUser({
          name: res?.data?.name,
          avatar: res?.data?.avatar,
          id: res?.data?._id,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleCardLike = (id, token) => {
    setIsLiked(true);
    isLiked
      ? addLike(URL, id, token)
          .then((card) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((c) => (c._id === id ? card.data : c)),
            );
            setIsLiked(false);
          })
          .catch((e) => {
            console.log(e);
          })
      : removeLike(URL, id, token)
          .then((card) => {
            setClothingItems((clothingItems) =>
              clothingItems.map((c) => (c._id === id ? card.data : c)),
            );
          })
          .catch((e) => {
            console.log(e);
          });
  };

  const handleAddItemModal = () => {
    setIsAddClothingModalOpen(true);
  };

  const handleEditProfileModal = () => {
    setEditProfileModal(true);
  };

  const handleRegisterModal = () => {
    setRegisterModal(true);
  };

  const handleLoginModal = () => {
    setLoginModal(true);
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
    setEditProfileModal(false);
    setRegisterModal(false);
    setLoginModal(false);
  };

  const handleCloseByEsc = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  const handleCloseByTarget = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            weather={weatherData}
            handleAddClick={handleAddClick}
            handleRegisterModal={handleRegisterModal}
            handleLoginModal={handleLoginModal}
            loggedIn={isLoggedIn}
          />
          <Switch>
            <ProtectedRoute loggedIn={isLoggedIn} path="/profile">
              <Profile
                user={currentUser}
                weather={weatherData}
                cards={clothingItems}
                cardClick={handleCardClick}
                handleAddItemModal={handleAddItemModal}
                handleEditProfileModal={handleEditProfileModal}
                handleLogOut={handleLogOut}
                onCardLike={handleCardLike}
                loggedIn={isLoggedIn}
              />
            </ProtectedRoute>
            <Route path="/">
              <Main
                weather={weatherData}
                cards={clothingItems}
                handleCardClick={handleCardClick}
                onCardLike={handleCardLike}
                user={currentUser}
                loggedIn={isLoggedIn}
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
            isLoggedIn={isLoggedIn}
          />
          <AddItemModal
            closeModal={handleClose}
            closeByEsc={handleCloseByEsc}
            closeByTarget={handleCloseByTarget}
            isOpen={isAddClothingModalOpen}
            onAddItem={handleAddItemSubmit}
          />
          <RegisterModal
            handleSignUp={handleRegistration}
            modalOpen={registerModal}
            closeModal={handleClose}
            closeByTarget={handleCloseByTarget}
            closeByEsc={handleCloseByEsc}
            isLoggedIn={setIsLoggedin}
          />
          <LoginModal
            handleSignIn={handleAuth}
            modalOpen={loginModal}
            closeModal={handleClose}
            closeByTarget={handleCloseByTarget}
            closeByEsc={handleCloseByEsc}
            isLoggedIn={setIsLoggedin}
            showLoginError={showLoginError}
            setShowLoginError={handleLoginError}
          />
          <EditProfileModal
            modalOpen={editProfileModal}
            modalLogin={loginModal}
            closeModal={handleClose}
            closeByTarget={handleCloseByTarget}
            closeByEsc={handleCloseByEsc}
            currentUser={currentUser}
            handleUserUpdate={handleProfileUpdate}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
