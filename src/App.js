import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="container">
      <h1>Film List</h1>
      <MovieList />
    </div>
  );
}

export default App;
