import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import AllQuotes from "../Pages/AllQuotes/AllQuotes";
import QuotesDetails from "../Pages/QuotesDetails/QuotesDetails";
import "./quoteApp.css";

function QuoteApp() {
  return (
    <div className="quote-main">
      <Routes>
        <Route path={"/"} element={<AllQuotes />} />
        <Route path={"/quote/:id"} element={<QuotesDetails />} />
      </Routes>
    </div>
  );
}

export default QuoteApp;
