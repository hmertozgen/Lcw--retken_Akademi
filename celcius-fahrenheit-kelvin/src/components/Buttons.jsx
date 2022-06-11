import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className="my-4">
        <button
          className="btn btn-success me-2"
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
