import React, { Component } from "react";

export default class ScoreAppCard extends Component {
  render() {
    return (
      <div className="score-card">
        <h1>{this.props.score}</h1>
        <p className={this.props.name}>{this.props.name}</p>
        <button
          className="btn"
          onClick={(e) => {
            this.props.goal()
          }}
        >
          Goal
        </button>
      </div>
    );
  }
}
