import React, { Component } from "react";
import "./tasbeeh.css";

export default class Tasbeeh extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <main className="main-container">
        <div className="tasbeeh-cont">
          <div className="screen-conteiner">
            <h1>{this.state.counter}</h1>
          </div>

          <div className="click-btn-cont">
            <button
              className="click btn"
              onClick={(e) => {
                this.setState({ counter: this.state.counter + 1 });
              }}
            >
              Up
            </button>
          </div>

          <div className="reset-btn-cont">
            <button
              className="reset btn"
              onClick={(e) => {
                this.setState({ counter: 0 });
              }}
            >
              reset
            </button>
          </div>
        </div>
      </main>
    );
  }
}
