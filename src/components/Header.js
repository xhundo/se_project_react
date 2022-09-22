import "../blocks/Header.css";
import logo from "../images/Logo.svg";
import avatar from "../images/avatar.svg";

function Header({ weather, handleAddClick }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <header className="header">
        <div className="header__content">
          <img className="header__logo" src={logo} alt="wtwr logo" />
          <p className="header__date">
            {currentDate}, {weather.city}
          </p>
        </div>
        <div className="header__info">
          <button className="header__btn" onClick={handleAddClick}>
            + Add clothes
          </button>
          <p className="header__user-name">Terrence Tegegne</p>
          <img className="header__user-avatar" src={avatar} alt="avatar" />
        </div>
      </header>
    </>
  );
}

export default Header;
