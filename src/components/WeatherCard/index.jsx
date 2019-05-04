import React from "react";
import "./WeatherCard.css";

const WeatherCard = props => {
  return (
    <div className="weather-card">
      <p>{props.weather.main.pressure}</p>
    </div>
  );
};

export default WeatherCard;
