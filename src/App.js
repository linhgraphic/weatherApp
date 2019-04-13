import React, { Component } from "react";
import "./App.css";
import Input from "./components/input";
import { API_KEY } from "./constants";
import Form from "./components/form";
import Weather from "./components/Weather";

class App extends Component {
  state = {
    loading: false,
    error: null,
    weatherData: null,
    city: ""
  };
  onChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    setTimeout(() => {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${
          this.state.city
        }&appid=${API_KEY}`
      )
        .then(res => {
          console.log("res", res);
          if (!res.ok) {
            return res
              .json()
              .then(json => this.setState({ error: json, loading: false }));
          }
          return res.json();
        })
        .then(json => {
          console.log("json", json);
          this.setState({ weatherData: json, loading: false });
        });
    }, 500);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form onSubmit={this.onSubmit}>
            <Input
              value={this.state.city}
              id="city"
              placeholder="Enter city"
              onChange={this.onChange}
            />
            <Input
              disabled={this.state.loading}
              type="submit"
              value={this.state.loading ? "Loading..." : "Submit"}
            />
          </Form>
          {this.state.weatherData && <Weather data={this.state.weatherData} />}
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
