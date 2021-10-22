import React, { useState } from "react";
import "./HomeScreen.scss";
import HeaderBar from "./Components/HeaderBar";
import WeeklyView from "./WeeklyView";
import { dummy_data } from "../Assets/Data/dummy_data";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";

const HomeScreen = () => {
  const history = useHistory();
  const [currentView, setCurrentView] = useState("Weekly");
  const [trainingData, setTrainingData] = useState(dummy_data);
  const [showAddSessionModal, setShowAddSessionModal] = useState(false);
  return (
    <div className="home-screen">
      <HeaderBar
        currentView={currentView}
        setCurrentView={setCurrentView}
        setShowAddSessionModal={setShowAddSessionModal}
      />
      {renderTrainingView(currentView, trainingData)}
      <AddSessionModal
        showAddSessionModal={showAddSessionModal}
        setShowAddSessionModal={setShowAddSessionModal}
      />
    </div>
  );
};

const renderTrainingView = (currentView, trainingData) => {
  switch (currentView) {
    case "Daily":
      return "Not yet available";
    case "Weekly":
      return <WeeklyView trainingData={trainingData} />;
    case "Monthly":
      return "Not yet available";
    case "Yearly":
      return "Not yet available";
  }
};

const AddSessionModal = ({ showAddSessionModal, setShowAddSessionModal }) => {
  return (
    <Modal
      show={showAddSessionModal}
      onHide={() => setShowAddSessionModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add A Training Session</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddSessionForm />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setShowAddSessionModal(false)}
        >
          Cancel
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

const AddSessionForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>
  );
};

export default HomeScreen;
