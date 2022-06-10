import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          onClick={this.props.handleClickIncrease}
        >
          Derece Artır
        </button>
        <button
          className="btn btn-danger"
          onClick={this.props.handleClickDecrease}
        >
          Derece Azalt
        </button>
      </div>
    );
  }
}
