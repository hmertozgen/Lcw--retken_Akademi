import React, { Component } from "react";

export default class Kelvin extends Component {
  render() {
    return (
      <div>
        <h2>Kelvin: {(this.props.temperature - 273.15).toFixed(2)}</h2>
      </div>
    );
  }
}
