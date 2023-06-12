import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import AllQuotes from "../Pages/AllQuotes/AllQuotes";
import QuotesDetails from "../Pages/QuotesDetails/QuotesDetails";
import "./quoteApp.css";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Registration/SignUp";

function QuoteApp() {
  return (
    <div className="quote-main">
      <Routes>
        <Route path={"/"} element={<AllQuotes />} />
        <Route path={"/quote/:id"} element={<QuotesDetails />} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/signup"} element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default QuoteApp;
