import React from "react";
import "./WeatherCard.css";
import WeatherIcon from "../WeatherIcon";

const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <WeatherIcon image={props.data.weather[0]} />
      <div>
        {props.data.main.temp}
        {props.units === "metric" ? "°C" : "F"}
      </div>
    </div>
  );
};

export default WeatherCard;
