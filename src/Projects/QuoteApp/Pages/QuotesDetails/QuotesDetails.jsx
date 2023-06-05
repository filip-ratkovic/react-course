import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
const URL ='https://js-course-server.onrender.com/quotes/get-quote/'
function QuotesDetails() {
    const [singleQuote, setSingleQuote] = useState([])
    const params = useParams();
    const id= params.id

    useEffect(()=> {
        fetch(URL+id)
        .then((data) => data.json())
        .then((res) => setSingleQuote(res))
        .catch((err) => console.log(err))
    },[])

    console.log(singleQuote)
  return (
    <div>
        <Link to={'/'}>Back to all quotes</Link>
<div >
                <h1>{singleQuote.quoteAuthor}</h1>
                <h3>{singleQuote.quoteSource}</h3>
                <p>{singleQuote.quoteText}</p>
                <p>{singleQuote.likes}</p>

                 </div>
    </div>
  )
}

export default QuotesDetails