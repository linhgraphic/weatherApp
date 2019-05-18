import React from "react";
import "./WeatherCard.css";
import WeatherIcon from "../WeatherIcon";

const WeatherCard = props => {
  return (
    <div className="weather-card">
      <WeatherIcon image={props.weather.weather[0]} />
      <p>{props.weather.main.humidity}</p>
    </div>
  );
};

export default WeatherCard;
