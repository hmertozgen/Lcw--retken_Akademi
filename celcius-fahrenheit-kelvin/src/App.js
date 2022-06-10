import "./App.css";

import React, { Component } from "react";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";
import Celcius from "./components/Celcius";
import Buttons from "./components/Buttons";
import Thermometer from "react-thermometer-ecotropy";

export default class App extends Component {
  state = { temperature: 0 };
  handleClickIncrease = () => {
    this.setState({
      temperature: this.state.temperature + 1,
    });
  };
  handleClickDecrease = () => {
    this.setState({
      temperature: this.state.temperature - 1,
    });
  };
  render() {
    return (
      <div className="container">
        <h1>Hava Nasıl</h1>
        <div className="row">
          <p className="col-md-4">
            Şu an sıcaklık {this.state.temperature} derece.
          </p>
          <Thermometer
            theme="light"
            value={this.state.temperature}
            max="100"
            steps="4"
            format="°C"
            size="medium"
            height="200"
            className="col-md-8"
          />
        </div>
        <Buttons
          className="m-2"
          handleClickIncrease={this.handleClickIncrease}
          handleClickDecrease={this.handleClickDecrease}
        />

        <div className="row">
          <div className="col-md-4">
            <Celcius temperature={this.state.temperature} />
          </div>
          <div className="col-md-4">
            <Fahrenheit temperature={this.state.temperature} />
          </div>
          <div className="col-md-4">
            <Kelvin temperature={this.state.temperature} />
          </div>
        </div>
      </div>
    );
  }
}
