import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const URL = "https://js-course-server.onrender.com/quotes/get-all-quotes"

function AllQuotes() {
const [quotesData, setQuotesData] = useState([])

useEffect(()=> {
    fetch(URL)
    .then((data) => data.json())
    .then((res) => setQuotesData(res))
    .catch((err) => console.log(err))
},[])

console.log(quotesData)

  return (
    <div className='quote-main'>
        {quotesData.map((quote) => {
            return <div key={quote._id} className='quote-card'>
                <h1>{quote.quoteAuthor}</h1>
                <h3>{quote.quoteSource}</h3>
                <p>{quote.quoteText}</p>
                <p>{quote.likes}</p>
                <Link to={`/quote/${quote._id}`}>Open nesto</Link>

                 </div>
        })}
    </div>
  )
}

export default AllQuotes