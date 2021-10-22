import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./HeaderBar.scss";

const HeaderBar = (props) => {
  return (
    <Navbar bg="light" sticky="top">
      <Container>
        <Navbar.Brand href="#home">Training Plan Viewer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Edit Plan</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Export Plan
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="justify-content-end">
            <NavDropdown
              title={"Current View: " + "Weekly"}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Daily</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Weekly</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Monthly</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderBar;
