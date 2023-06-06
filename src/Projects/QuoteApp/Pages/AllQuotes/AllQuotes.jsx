import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "https://js-course-server.onrender.com/quotes/get-all-quotes";

function AllQuotes() {
  const [quotesData, setQuotesData] = useState([]);
  const [like, setLike] = useState();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((data) => data.json())
      .then((res) => setQuotesData(res))
      .catch((err) => console.log(err));
  }, []);

  console.log(quotesData);

  // const handleLike = () => {

  //   fetch(`https://js-course-server.onrender.com/quotes/like/${quotesData._id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     // body: JSON.stringify({likes: quotesData.likes + 1})
  //   })
  //   .then((data) => data.json())
  //   .then((res) => setQuotesData(res))
  //   .catch((err) => console.log(err))
  // }

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
    </div>
  );
}

export default AllQuotes;
