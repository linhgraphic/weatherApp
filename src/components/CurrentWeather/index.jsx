import React from "react";

const CurrentWeather = props => {
  return (
    <div>
      <p>{`Temparature: ${props.data.main.temp} ${
        props.units === "metric" ? "°C" : "F"
      }`}</p>
      <p>{`Humidity: ${props.data.main.humidity}`}</p>
      <p>{`Cloud: ${props.data.clouds.all}`}</p>
    </div>
  );
};

export default CurrentWeather;
