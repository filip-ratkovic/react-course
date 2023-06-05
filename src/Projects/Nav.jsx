import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to={"/score"}>Score</Link>
        <Link to={"/tasbeeh"}>Score</Link>
        <Link to={"/todo"}>Score</Link>
    </div>
  )
}

export default Nav