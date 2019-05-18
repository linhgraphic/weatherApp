import React from "react";
import WeatherCard from "../WeatherCard";
import "./ForecastWeather.css";

const ForecastWeather = props => {
  return (
    <>
      <h1>The weather in {props.city} is: </h1>
      <div className="forecast-weather">
        {props.data.list.map(forecast => (
          //<div>{forecast.main.pressure}</div>
          <WeatherCard weather={forecast} />
        ))}
        {/* <p>{`Temperature: ${props.data.temp}`}.</p>
      <p>{`Humidity: ${props.data.main.humidity}`}</p>
      <p>{`Cloud: ${props.data.clouds.all}`}</p> */}
      </div>
    </>
  );
};
export default ForecastWeather;
