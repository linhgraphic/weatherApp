import React from "react";
import ListItems from "../listItems";
import WeatherCard from "../WeatherCard";

const DailyWeather = (props) => {
  const dataArray = [];
  for (let i = 0; i < 40; i += 8) {
    for (let j = 0; j < 8; j += 1) {
      //   return <WeatherCard temp={props.data[i + j].main.temp} />;
    }
  }
};

export default DailyWeather;
