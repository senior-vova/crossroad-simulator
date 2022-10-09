import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { ICar, Way, Color } from "../../data/types";

type PropsType = {
  show: boolean;
  handleClose: () => void;
  onAddCar: (car: ICar) => void;
};
const AddCarModal: React.FC<PropsType> = ({ show, handleClose, onAddCar }) => {
  const [way, setWay] = useState<Way>("straight");
  const [color, setColor] = useState<Color>("blue");

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Car color</Form.Label>
          <Form.Select
            value={color}
            onChange={(e) => setColor(e.target.value as Color)}
          >
            <option value={"blue"}>Blue</option>
            <option value={"red"}>Red</option>
            <option value={"yellow"}>Yellow</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Way</Form.Label>
          <Form.Select
            value={way}
            onChange={(e) => setWay(e.target.value as Way)}
          >
            <option value={"straight"}>Straight</option>
            <option value={"left"}>Left</option>
            <option value={"right"}>Right</option>
          </Form.Select>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
            onAddCar({ way, color });
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCarModal;
