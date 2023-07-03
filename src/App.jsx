import React from "react";
import Tasbeeh from "./Projects/TasbeehCounter/Tasbeeh";
import { Routes, Route } from "react-router-dom";
import QuoteApp from "./Projects/QuoteApp/Components/QuoteApp";
import AllProjects from "./AllProjects";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider>
      <div>
        <QuoteApp />
      </div>
    </Provider>
  );
}

export default App;
