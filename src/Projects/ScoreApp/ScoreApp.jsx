import React, { Component } from "react";
import "./scoreApp.css";
import ScoreAppCard from "./ScoreAppCard";

export default class ScoreApp extends Component {
state = {
    homeScore: 0,
    guestScore: 0
}

  render() {
    return (
      <div className="score-cont">
        <ScoreAppCard 
        name="Home"
        score={this.state.homeScore}
        goal={(e) => { 
            this.setState({homeScore:this.state.homeScore +1})
          }}
        />

        <ScoreAppCard 
        name="Guest"
        score={this.state.guestScore}
        goal={(e) => { 
            this.setState({guestScore:this.state.guestScore +1})
          }}
        />
      </div>
    );
  }
}
