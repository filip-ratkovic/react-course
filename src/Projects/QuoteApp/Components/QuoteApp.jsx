import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import AllQuotes from "../Pages/AllQuotes/AllQuotes";
import QuotesDetails from "../Pages/QuotesDetails/QuotesDetails";
import "./quoteApp.css";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Registration from "../Pages/Registration/Registration";
import AddQuote from "../Pages/AddQuote/AddQuote";
import EditQuote from "../Pages/Edit/EditQuote";

function QuoteApp() {
  return (
    <div className="quote-main">
      <Routes>
      <Route path={"/"} element={<Registration/>} />
      <Route path={"/add"} element={<AddQuote/>} />
        <Route path={"/quote"} element={<AllQuotes />} />
        <Route path={"/quote/:id"} element={<QuotesDetails />} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/signup"} element={<SignUp/>} />
        <Route path={"/quote/:id/edit"} element={<EditQuote/>} />

      </Routes>
    </div>
  );
}

export default QuoteApp;
