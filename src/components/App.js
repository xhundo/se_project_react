import "../blocks/App.css";
import Footer from "./Footer";
import Header from "./Header";
import ModalWithForm from "./ModalWithForm";
import { getWeather, filterWeather } from "../utils/weatherApi";
import React from "react";
import { key } from "../utils/constants";
import { location } from "../utils/constants";
import Main from "./Main";
import { defaultClothingItems } from "../utils/constants";

function App() {
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
      <Header weather={weatherData} />
      <Main weather={weatherData} cards={defaultClothingItems} />
      <Footer />
      <ModalWithForm
        title="New garment"
        name=""
        buttonTxt="Add garment"
        onClose=""
      >
        <label className="modal__input-label">Name</label>
        <input className="modal__input" type="text" placeholder="Name" />
        <label className="modal__input-label">Image</label>
        <input className="modal__input" type="url" placeholder="Image URL" />
        <label className="modal__input-label">Select the weather type:</label>
        <input className="modal__input" id="hot" type="radio" />
        <label for="hot">Hot</label>
        <input className="modal__input" id="warm" type="radio" />
        <label for="warm">Warm</label>
        <input className="modal__input" id="cold" type="radio" />
        <label for="cold">Cold</label>
      </ModalWithForm>
    </div>
  );
}

export default App;
