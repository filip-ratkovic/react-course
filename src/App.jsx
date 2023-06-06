import React from "react";
import Tasbeeh from "./Projects/TasbeehCounter/Tasbeeh";
import { Routes, Route } from "react-router-dom";
import QuoteApp from "./Projects/QuoteApp/Components/QuoteApp";
import AllProjects from "./AllProjects";

function App() {
  return (
    <div>
  <QuoteApp/>      
      {/* <Routes>
        <Route path={"/"} element={<AllProjects />} />
        <Route path={"/quote"} element={<QuoteApp/>} />
        <Route path={"/tasbeeh"} element={<Tasbeeh/>} />
      </Routes> */}
    </div>
  );
}

export default App;
