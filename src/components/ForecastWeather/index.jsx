import React from "react";
import DailyWeather from "../DailyWeather";
import "./ForecastWeather.css";

const ForecastWeather = (props) => {
  return (
    <div className="forecast-weather">
      <h2>
        The temperature in {props.city} per 3 hours within the next 5 days is:{" "}
      </h2>
      <div className="temperature">
        <DailyWeather data={props.data.list} units={props.units} />
      </div>
    </div>
  );
};
export default ForecastWeather;
