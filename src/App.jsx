import React, { Component } from 'react'
import ToDo from './Projects/ToDo/ToDo'

export default class App extends Component {
  
  render() {
    return (
      <div className="app">
      <ToDo/>
      </div>
    )
  }
}