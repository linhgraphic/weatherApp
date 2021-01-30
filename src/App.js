import React, { Component } from "react";
import "./App.css";
import "./components/input/input.css";
import Input from "./components/input";
import { API_KEY } from "./constants";
import Form from "./components/form";
import CurrentWeather from "./components/CurrentWeather";
import ForecastWeather from "./components/ForecastWeather";
import Loader from "./components/Loader";

class App extends Component {
  state = {
    loading: false,
    error: null,
    weatherData: null,
    city: "",
    currentWeather: true,
    forecastWeather: true,
    units: "metric",
  };
  onChange = (event) => {
    this.setState({
      [event.target.name || event.target.id]: event.target.value,
      error: null,
    });
  };
  onChangeCheckbox = (event) => {
    this.setState({
      [event.target.name || event.target.id]: !this.state[
        event.target.name || event.target.id
      ],
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true, forecastData: null, weatherData: null });
    if (this.state.currentWeather)
      fetch(
        //to use the same protocol of where the app is run. in this case http to https
        `${window.location.protocol}//api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}&units=${this.state.units}`
      )
        .then((res) => {
          if (!res.ok) {
            res.json().then((json) => {
              throw json;
            });
          }
          return res.json();
        })
        .then((json) => {
          this.setState({
            weatherData: json,
            loading: false,
            currentUnits: this.state.units,
            currentCity: this.state.city,
          });
        })
        .catch((error) => this.setState({ error, loading: false }));

    if (this.state.forecastWeather)
      fetch(
        `${window.location.protocol}//api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=${API_KEY}&units=${this.state.units}`
      )
        .then((res) => {
          if (!res.ok) {
            res.json().then((json) => {
              throw json;
            });
          }
          return res.json();
        })
        .then((json) => {
          this.setState({
            forecastData: json,
            loading: false,
            currentUnits: this.state.units,
            currentCity: this.state.city,
          });
        })
        .catch((error) => this.setState({ error, loading: false }));
  };

  render() {
    return (
      <div className="App">
        <Loader open={this.state.loading} />
        <header className="App-header">
          <Form onSubmit={this.onSubmit}>
            <Input
              label="City: "
              value={this.state.city}
              id="city"
              placeholder="Enter city"
              onChange={this.onChange}
            />
            <br />
            <Input
              className="ip"
              label="Current Weather"
              id="currentWeather"
              type="checkbox"
              onChange={this.onChangeCheckbox}
              checked={this.state.currentWeather}
            />
            <br />

            <Input
              label="Forecast Weather"
              id="forecastWeather"
              type="checkbox"
              onChange={this.onChangeCheckbox}
              checked={this.state.forecastWeather}
            />
            <br />
            <Input
              label="Imperial units"
              checked={"imperial" === this.state.units}
              id="ImperialUnits"
              type="radio"
              name="units"
              value="imperial"
              onChange={this.onChange}
            />

            <br />
            <Input
              label="Metric units"
              checked={"metric" === this.state.units}
              id="MetricUnit"
              type="radio"
              name="units"
              value="metric"
              onChange={this.onChange}
            />

            <br />
            <Input
              disabled={
                !(this.state.currentWeather || this.state.forecastWeather) ||
                this.state.loading ||
                !this.state.city
              }
              type="submit"
              value={this.state.loading ? "Loading..." : "Submit"}
            />
          </Form>
          {this.state.weatherData && (
            <CurrentWeather
              city={this.state.currentCity}
              data={this.state.weatherData}
              units={this.state.currentUnits}
            />
          )}
          {this.state.forecastData && (
            <ForecastWeather
              data={this.state.forecastData}
              city={this.state.currentCity}
              units={this.state.currentUnits}
            />
          )}
          {this.state.error && (
            <p>
              SOMETHING SOMEWHERE WENT TERRIBLY WRONG.
              {this.state.error.message}
            </p>
          )}
        </header>
      </div>
    );
  }
}

export default App;
