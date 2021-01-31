import React from "react";
import WeatherIcon from "../WeatherIcon";
import "./CurrentWeather.css";

const CurrentWeather = (props) => {
  return (
    <div className="current-weather">
      <h1>Current weather in {props.city} is:</h1>
      <WeatherIcon image={props.data.weather[0]} />
      <p>{`Temparature: ${props.data.main.temp}${
        props.units === "metric" ? "°C" : "F"
      }`}</p>
      <p>{`Humidity: ${props.data.main.humidity}%`}</p>
      <p>{`Cloud: ${props.data.clouds.all}%`}</p>
    </div>
  );
};

export default CurrentWeather;
