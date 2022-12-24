import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
export const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");
  const handleOnChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setStr(value);
  };
  return (
    <div>
      <Form
        className="mt-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit(str);
        }}
      >
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Enter Movie"
              className="text-center"
              onChange={handleOnChange}
            />
          </Col>
          <Col>
            <Button variant="success" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
