import React from "react";
import DailyWeather from "../DailyWeather";
import WeatherCard from "../WeatherCard";
import "./ForecastWeather.css";

const ForecastWeather = (props) => {
  return (
    <>
      <h1>
        The temperature in {props.city} next 40 hours (per 3 hours in 5 days)
        is:{" "}
      </h1>
      <div className="forecast-weather">
        {props.data.list.map((forecast) => (
          <WeatherCard weather={forecast} units={props.units} />
        ))}

        {/* <DailyWeather data={props.data.list} /> */}
        {/* <DailyWeather /> */}
      </div>
    </>
  );
};
export default ForecastWeather;
