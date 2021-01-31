import React from "react";
import WeatherCard from "../WeatherCard";
import "./DailyWeather.css";

const DailyWeather = (props) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let tempData = [];
  const dataArray = [];
  let today = new Date().getDay();
  for (let i = 0; i < 40; i += 8) {
    today = today < +6 ? 0 : today++;
    for (let j = 0; j < 8; j++) {
      tempData.push(
        <WeatherCard data={props.data[i + j]} units={props.units} />
      );
    }
    dataArray.push(tempData);
    tempData = [];
  }

  return dataArray.map((data, index) => {
    return (
      <div>
        <h3>{days[today++]} </h3>
        <div className="daily-weather">
          <div key={index}>{data}</div>
        </div>
      </div>
    );
  });
};

export default DailyWeather;
