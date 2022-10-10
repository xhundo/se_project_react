import "../blocks/ToggleSwitch.css";
import React from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = React.useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <div className="toggleswitch__container">
      <label className="toggleswitch">
        F
        <input
          className="toggleswitch__input"
          type="checkbox"
          value={currentTemperatureUnit}
          onClick={handleToggleSwitchChange}
        />
        <span className="toggleswitch__slider"></span>C
      </label>
    </div>
  );
}

export default ToggleSwitch;
