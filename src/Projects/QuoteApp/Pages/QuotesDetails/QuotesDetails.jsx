import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../Components/quoteApp.css";
const URL = "https://js-course-server.onrender.com/quotes/get-quote/";
function QuotesDetails() {
  const [singleQuote, setSingleQuote] = useState([]);
  const [liked, setLiked] = useState(false);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate()
  const token = localStorage.getItem('authToken');
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
        Authorization: token
      },
    })
      .then((data) => data.json())
      .then((res) => setSingleQuote(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = () => {

    navigate("/quote");

    fetch(`https://js-course-server.onrender.com/quotes/delete/${id}`, {
      method: "DEL",
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
      <Link to={"/quote"}>Back to all quotes</Link>
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

       <Link to={`/quote/${id}/edit`}> <button
        >
          edit quote
        </button></Link>

        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  );
}

export default QuotesDetails;
