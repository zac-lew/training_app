import React from "react";
import "./LoginCard.scss";
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const LoginCard = (props) => {
  const history = useHistory();
  return (
    <Card style={{ width: "22rem" }} className="login-card">
      <Card.Body>
        <Card.Title>Login To Get Started!</Card.Title>
        <InputGroup className="mb-3">
          <FormControl placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon1" />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" />
        </InputGroup>
        <Button variant="success" onClick={() => history.push("/home")}>
          Login
        </Button>
        <br />
        <div className="sign-up-message">
          Don't have an account? <a href="./">Sign Up Now</a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default LoginCard;
