import React, { Component } from "react";

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>
        <h2>Fahrenheit: {(this.props.temperature * 1.8 + 32).toFixed(2)}</h2>
      </div>
    );
  }
}
