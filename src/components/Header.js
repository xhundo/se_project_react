import '../blocks/Header.css';
import logo from '../images/Logo.svg';
import avatar from '../images/avatar.svg';
import ToggleSwitch from './ToggleSwitch';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { currentUserContext } from '../contexts/CurrentUserContext';

function Header({
  weather,
  handleAddClick,
  loggedIn,
  handleRegisterModal,
  handleLoginModal,
}) {
  const currentUser = useContext(currentUserContext);
  const currentDate = new Date().toLocaleString('default', {
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/">
          <img className="header__logo" src={logo} alt="wtwr logo" />
        </Link>
        <p className="header__date">
          {currentDate}, {weather.city}
        </p>
      </div>
      <div className="header__info">
        <ToggleSwitch />
        {loggedIn ? (
          <button className="header__btn" onClick={handleAddClick}>
            + Add clothes
          </button>
        ) : (
          <button className="header__btn" onClick={handleRegisterModal}>
            Sign up
          </button>
        )}
        {loggedIn ? (
          <Link to="/profile">
            <p className="header__user-name">{currentUser.name}</p>
            {currentUser.avatar === '' ? (
              <div className="header__user-placeholder">
                {currentUser.name[0]}
              </div>
            ) : (
              <img className="header__user-avatar" src={currentUser.avatar} />
            )}
          </Link>
        ) : (
          <button className="header__btn" onClick={handleLoginModal}>
            Log in
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
