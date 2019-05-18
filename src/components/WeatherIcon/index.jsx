import React from "react";

const WeatherIcon = props => (
  <img
    src={`http://openweathermap.org/img/w/${props.image.icon}.png`}
    alt={props.image.description}
  />
);

export default WeatherIcon;
