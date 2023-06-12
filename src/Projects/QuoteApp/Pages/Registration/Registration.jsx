import React from 'react'
import Login from '../Login/Login'
import { Link } from 'react-router-dom'
import SignUp from '../SignUp/SignUp'

function Registration() {
  return (
    <div>
        <SignUp/>

        <Link to={'/login'}>You have account ?</Link>
    </div>
  )
}

export default Registration