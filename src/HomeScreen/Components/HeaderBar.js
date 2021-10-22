import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./HeaderBar.scss";
import Views from "../../Assets/Constants/views";

const HeaderBar = ({ currentView, setCurrentView }) => {
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
              title={"Current View: " + currentView}
              id="basic-nav-dropdown"
            >
              {renderViewSelector(currentView, setCurrentView)}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const renderViewSelector = (currentView, setCurrentView) => {
  return Views.map((view, i) => (
    <NavDropdown.Item
      key={i}
      active={currentView === view}
      onClick={() => setCurrentView(view)}
    >
      {view}
    </NavDropdown.Item>
  ));
};

export default HeaderBar;
