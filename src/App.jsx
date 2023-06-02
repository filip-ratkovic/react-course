import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import ScoreApp from './Projects/ScoreApp/ScoreApp'
import InstagramClone from './Projects/InstagramClone/InstagramClone'
import InstaCard from './Projects/InstagramClone/InstaCard'

function App() {
  return (
    <div>

<Routes>
  <Route path="/" element={<InstagramClone/>}/>
  <Route path="/user/:id" element={<InstaCard/>}/>

</Routes>
      
    </div>
  )
}

export default App