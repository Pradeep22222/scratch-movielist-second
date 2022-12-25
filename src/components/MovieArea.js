import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
export const MovieArea = ({ movieList }) => {
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);
  const onRomanticClick = () => {
    const tempArg = movieList.filter((item) => item.type === "romantic");
    setDisplayList(tempArg);
  };
  const onComedyClick = () => {
    const tempArg = movieList.filter((item) => item.type === "comedy");
    setDisplayList(tempArg);
  };
  const onAllClick = () => {
    setDisplayList(movieList);
  };
  console.log(displayList);
  return (
    <div>
      {displayList.length > 0 && (
        <Row className="mt-3 mb-3 buttonList-row">
          <div className="d-flex justify-content-between">
            <ButtonGroup aria-label="Basic example">
              <Button variant="warning" onClick={onAllClick}>
                All
              </Button>
              <Button variant="danger" onClick={onRomanticClick}>
                Romantic
              </Button>
              <Button variant="success" onClick={onComedyClick}>
                Comedy
              </Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Basic example">
              <Button variant="info">Grid</Button>
              <Button variant="secondary">List</Button>
            </ButtonGroup>
          </div>
        </Row>
      )}

      <Row>
        {displayList.map((item, i) => {
          return <MovieCard key={i} movie={item}></MovieCard>;
        })}
      </Row>
    </div>
  );
};
