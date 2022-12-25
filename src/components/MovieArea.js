import React from "react";
import { MovieCard } from "./MovieCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
export const MovieArea = ({ movieList,}) => {
  return (
    <div>
      {movieList.length>0 && (
        <Row className="mt-3 mb-3 buttonList-row">
          <div className="d-flex justify-content-between">
            <ButtonGroup aria-label="Basic example">
              <Button variant="warning">All</Button>
              <Button variant="danger">Romantic</Button>
              <Button variant="success">Comedy</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Basic example">
              <Button variant="info">Grid</Button>
              <Button variant="secondary">List</Button>
            </ButtonGroup>
          </div>
        </Row>
      )}

      <Row>
        {movieList.map((item, i) => {
          return <MovieCard movie={item}></MovieCard>;
        })}
      </Row>
    </div>
  );
};
