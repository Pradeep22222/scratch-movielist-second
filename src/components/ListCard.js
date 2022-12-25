import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const ListCard = ({ movie = {}, handleOnMovieAdd }) => {
  return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>list view{movie.Title}</Card.Title>
        <Card.Text>{movie.Plot}</Card.Text>
        <div className="d-flex justify-content-around">
          <Button
            variant="danger"
            onClick={() => handleOnMovieAdd(movie, "romantic")}
          >
            Romantic
          </Button>
          <Button
            variant="success"
            onClick={() => handleOnMovieAdd(movie, "comedy")}
          >
            Comedy
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
