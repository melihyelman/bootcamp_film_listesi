import React from "react";
import MovieCard from "./MovieCard";
import movies from "../movies";
import "./MovieList.css";

function MovieList() {
  return (
    <div className="movie-body">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
