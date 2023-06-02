import React, { Component } from 'react'
import plusImg from './plus.png'
import './todo.css'

export default class ToDo extends Component {
  state = {
    taskName: "",
    todoCards:[]
  }

  addTodo = () => {
    const newTodoList = [...this.state.todoCards]
    newTodoList.push(this.state.taskName)
    this.setState({
      taskName:'',
      todoCards: newTodoList
    })
  }
  render() {
    return (
      <div className="container">
      <div className="todo__box">
        <div className="title">
          <h2 className="h__todo">Todo App</h2>
          <p>codewithnepal</p>
        </div>
        <div className="form">
          <input id="taskName" type="add" placeholder="Add your new todo" value={this.state.taskName}
          onChange={(e)=>{this.setState({taskName: e.target.value})
          console.log(this.state.taskName)
          }} />
          <button id="btnn1" className="btnn1" onClick={()=>{this.addTodo()}}>
            <img src={plusImg} className="img" alt="" />
          </button>
        </div>
        <div id="list" className="d-grid gap-2 col-6 button">
              {this.state.todoCards.map((todoCard) => {
              return  <h1>{todoCard}</h1>
              })}
        </div>
        <div className="footerr">
          <p className="p">You have <span id="numberOfItems">{this.state.todoCards.length}</span> pending tasks</p>
          <button id="btnn2" className="btnn2" onClick={() => {
            this.setState({todoCards:[], taskName:'',})
          }}>Clear All</button>
        </div>
      </div>
    </div>
    )
  }
}
