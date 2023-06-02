import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

function InstaCard() {
    const location = useLocation()
    console.log(location.state)
    const newInfo = location.state
  return (
    <div className="insta-card">
                <h1>{newInfo.name}</h1>
                <img src={newInfo.img} alt={newInfo.name} />
                <p>Likes : {newInfo.likes}</p>
            </div>
  )
}

export default InstaCard