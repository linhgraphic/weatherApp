import React from "react";
import "./WeatherCard.css";

const WeatherCard = props => {
  return (
    <div className="weather-card">
      <p>{props.weather.main.humidity}</p>
    </div>
  );
};

export default WeatherCard;
