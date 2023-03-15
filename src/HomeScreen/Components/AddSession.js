import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AddSession.scss";

export const AddSessionModal = ({
  showAddSessionModal,
  setShowAddSessionModal,
}) => {
  return (
    <Modal
      show={showAddSessionModal}
      onHide={() => setShowAddSessionModal(false)}
      dialogClassName="add-session-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add A Training Session</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddSessionForm />
      </Modal.Body>
      <Modal>test</Modal>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => setShowAddSessionModal(false)}
        >
          Cancel
        </Button>
        <Button
          variant="secondary"
          onClick={() => setShowAddSessionModal(false)}
        >
          Save and Add Another Session
        </Button>
        <Button variant="primary" onClick={() => setShowAddSessionModal(false)}>
          Save and Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const AddSessionForm = () => {
  /* Form Elements:
        - Date (date picker)
        - Daily session (auto generate)
        - Sport (dropdown)
        - Distance / Time (radio button to select either distance or time, 
            then number input and dropdown for unit)
        - Intensity (text box)
        - Notes (paragraph box)
    */

  return (
    <Form className="add-session-form">
      <div className="left-column">
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="email" placeholder="Enter Date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sport</Form.Label>
          <Form.Control type="email" placeholder="Enter Sport" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </div>
      <div className="left-column">
        <Form.Group className="mb-3">
          <Form.Label>Distance</Form.Label>
          <Form.Control type="email" placeholder="Enter Distance" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Intensity</Form.Label>
          <Form.Control type="email" placeholder="Enter Intensity" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Notes</Form.Label>
          <Form.Control type="email" placeholder="Enter Notes" />
        </Form.Group>
      </div>
    </Form>
  );

  const existingSessions = () => {};
};
