import React from "react";
import { MovieCard } from "./MovieCard";
import Row from "react-bootstrap/Row";

export const MovieArea = () => {
  return (
    <div>
      <Row>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
        <MovieCard></MovieCard>
      </Row>
    </div>
  );
};
