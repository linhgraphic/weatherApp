import React from "react";

const Weather = props => {
  const kelvin = 273.15;
  return (
    <div>
      <p>{`Temparature: ${(props.data.main.temp - kelvin).toFixed(2)}°C`}</p>
    </div>
  );
};

export default Weather;
