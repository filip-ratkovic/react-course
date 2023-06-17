import "./allQuotes.css"
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDuotone, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const URL = "https://js-course-server.onrender.com/quotes/get-all-quotes";

function AllQuotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [loading, setLoading] = useState(true)
  
  const navigate = useNavigate()

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((res) =>
       setQuotesData(res),
        setLoading(false)
      )
      .catch((err) => console.log(err));

  }, []);

  if(loading) {
    return <Loading/>
  }
  return (
    <div className="quote-main">
      {quotesData.map((quote) => {
        return (
          <div key={quote._id} className="quote-card">
            <h1>{quote.quoteAuthor}</h1>
          <div className="quote-text">
            <div className="quote-navodnici">
            <FontAwesomeIcon icon={faQuoteLeft} />            </div>
          <p>{quote.quoteText}</p>
          </div>

            <h5>{quote.quoteSource}</h5>
            <div className="likes">
              <p>Likes: {quote.likes}</p>
            </div>
            <button className="more-details-btn" onClick={(() => {navigate(`/quote/${quote._id}`)})}>More details /</button>

          </div>
        );
      })}

    <button className="add-quote-btn" onClick={(() => {navigate("/add")})}>+</button>

    </div>
  );
}

export default AllQuotes;
