import "../blocks/App.css";
import Footer from "./Footer";
import Header from "./Header";
import { getWeather, filterWeather } from "../utils/weatherApi";
import React from "react";
import { key } from "../utils/constants";
import { location } from "../utils/constants";
import Main from "./Main";

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
      <Main weather={weatherData} />
      <Footer />
    </div>
  );
}

export default App;
