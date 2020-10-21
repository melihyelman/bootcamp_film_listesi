import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <p>{movie.id}</p>
      <p>{movie.title}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieCard;
