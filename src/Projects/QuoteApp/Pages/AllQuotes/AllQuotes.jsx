import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./allQuotes.css"

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
            <h3>{quote.quoteSource}</h3>
            <p>{quote.quoteText}</p>
            <div className="likes">
              <p>{quote.likes}</p>
            </div>
            <Link to={`/quote/${quote._id}`}>More details</Link>
          </div>
        );
      })}

    <button className="add-quote-btn" onClick={(() => {navigate("/add")})}>+</button>

    </div>
  );
}

export default AllQuotes;
