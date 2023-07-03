import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./quotesDetails.css"
import { useDispatch, useSelector } from "react-redux";
import { quoteSlice } from "../../../../store/quoteSlice";
import jwtDecode from "jwt-decode";


const URL = "https://js-course-server.onrender.com/quotes/get-quote/";


function QuotesDetails() {
  const [singleQuote, setSingleQuote] = useState([]);
  const [liked, setLiked] = useState(false);
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate()
  const token = localStorage.getItem('authToken');
  const dispach = useDispatch()

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


    fetch(`https://js-course-server.onrender.com/quotes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((data) => data.json())
      .then((res) => setSingleQuote(res))
      .catch((err) => console.log(err));
      navigate("/quote");

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
        <div
          className={`heart ${liked ? "liked" : ""}`}
          onClick={()=> {
              // TODO  DISLIKE
              liked ? console.log('DISLIKE') : handleLike()
          }}
        >
        </div>

       <Link to={`/quote/${id}/edit`}> <button
        >
          edit quote
        </button></Link>

        <button onClick={handleDelete}>delete</button>
        <div>
          <button onClick={()=> {
              const decoded = jwtDecode(token);
              dispach(quoteSlice.actions.setData(decoded));
            navigate("/favorites")
          }}>Add to favorites</button>
        </div>
      </div>
    </div>
  );
}

export default QuotesDetails;
