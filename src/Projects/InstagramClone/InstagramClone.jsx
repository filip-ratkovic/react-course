import React from 'react'
import './insta.css'
import { Link } from 'react-router-dom'

function InstagramClone() {
    const infos = [
        {
            name: 'Filip',
            img: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
            likes: 2,
        },
        {
            name: 'Muhamed',
            img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            likes: 23,
        }

    ]
  return (
    <div className='insta-cont'>
       {infos.map((info) => {
          return  <div className="insta-card">
                <h1>{info.name}</h1>
                <img src={info.img} alt={info.name} />
                <p>Likes : {info.likes}</p>
                <Link to={`/user/${info.name}`} state={info}>See more</Link>
            </div>
       })}
    </div>
  )
}

export default InstagramClone