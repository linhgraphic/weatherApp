import React from "react";

// const Weather = props => {
//   const kelvin = 273.15;
//   return (
//     <div>
//       <p>{`Temparature: ${(props.data.main.temp - kelvin).toFixed(2)}°C`}</p>
//       <p>{`Humidity: ${props.data.main.humidity}`}</p>
//       <p>{`Cloud: ${props.data.clouds.all}`}</p>
//     </div>
//   );
// };

const CurrentWeather = props => {
  return (
    <div>
      <p>{`Temparature: ${props.data.main.temp}`}</p>
      <p>{`Humidity: ${props.data.main.humidity}`}</p>
      <p>{`Cloud: ${props.data.clouds.all}`}</p>
    </div>
  );
};

export default CurrentWeather;
