import React from 'react'
import { Link } from 'react-router-dom'

function AllProjects() {
  return (
    <div>
        <Link to={'/quote'}>Quote app</Link>
        <Link to={'/Tasbeeh'}>Tasbeeh app</Link>

    </div>
  )
}

export default AllProjects