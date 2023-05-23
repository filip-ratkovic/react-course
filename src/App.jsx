import React, { Component } from 'react'
import ToDo from './Projects/ToDo/ToDo'
import Score from './Projects/Score/Score'

export default class App extends Component {
  
  render() {
    return (
      <div className="app">
        <Score/>
      </div>
    )
  }
}