import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../Components/quoteApp.css";
const URL = "https://js-course-server.onrender.com/quotes/get-quote/";
function QuotesDetails() {
  const [singleQuote, setSingleQuote] = useState([]);
  const [liked, setLiked] = useState(false);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(URL + id)
      .then((data) => data.json())
      .then((res) => setSingleQuote(res))
      .catch((err) => console.log(err));
  }, []);
  const handleLike = () => {
    setLiked(true);

    fetch(`https://js-course-server.onrender.com/quotes/like/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => setSingleQuote(res))
      .catch((err) => console.log(err));
  };

   const handleEdit = () => {
      const updatedData = {
        quoteAuthor: singleQuote.quoteAuthor
      }
    fetch(`https://js-course-server.onrender.com/quotes/edit/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((res) => setSingleQuote(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Link to={"/"}>Back to all quotes</Link>
      <div>
      <input
        type="text"
        name="name"
        value={singleQuote.quoteAuthor}
        onChange={event => setSingleQuote({...singleQuote, quoteAuthor : event.target.value})}
      />
        <h3>{singleQuote.quoteSource}</h3>
        <p>{singleQuote.quoteText}</p>
        <p>{singleQuote.likes}</p>
        <button
          className={`like-btn ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          33
        </button>

        <button
          onClick={handleEdit}
        >
          edit
        </button>
      </div>
    </div>
  );
}

export default QuotesDetails;
