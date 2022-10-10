import "../blocks/Header.css";
import logo from "../images/Logo.svg";
import avatar from "../images/avatar.svg";
import ToggleSwitch from "./ToggleSwitch";
import React from "react";
import { Link } from "react-router-dom";

function Header({ weather, handleAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
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
        <button className="header__btn" onClick={handleAddClick}>
          + Add clothes
        </button>
        <Link to="/profile">
          <p className="header__user-name">Terrence Tegegne</p>
          <img className="header__user-avatar" src={avatar} alt="avatar" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
