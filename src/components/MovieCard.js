import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export const MovieCard = ({movie={}}) => {
    return (
    <Card style={{ width: "18rem" }} className="m-2">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Plot}</Card.Text>
        <div className="d-flex justify-content-around">
          <Button variant="success">Romantic</Button>
          <Button variant="info">Comedy</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
