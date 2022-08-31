import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Search from "./components/Search";
import "./App.css";
import Searched from "./components/Searched";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Tune-Verse</h1>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
