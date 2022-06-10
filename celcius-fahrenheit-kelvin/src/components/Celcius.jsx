import React, { Component } from "react";

export default class Celcius extends Component {
  render() {
    return (
      <div>
        <h2>Celcius: {this.props.temperature}</h2>
      </div>
    );
  }
}
