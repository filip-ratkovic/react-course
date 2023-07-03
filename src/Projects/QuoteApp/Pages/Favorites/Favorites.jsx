import React from 'react'
import { useDispatch, useSelector } from "react-redux";

function Favorites() {

    const quoteState = useSelector((state) => state.quote);
console.log(quoteState)

  return (
    <div>Favorites</div>
  )
}

export default Favorites