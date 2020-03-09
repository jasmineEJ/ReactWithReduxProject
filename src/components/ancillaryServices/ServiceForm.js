import React from "react";
import PropTypes from "prop-types";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";

import "./service.css";

const ServiceForm = ({ service, onChangeService, handleSubmit }) => {
  return (
    <Form noValidate onSubmit={handleSubmit} className="serviceForm">
      <h4>
        {service ? (service.id ? "Edit " : "Add ") : null}Ancillary Service
      </h4>
      <Form.Group controlId="formServiceName">
        <Form.Label>Service name</Form.Label>
        <Form.Control
          required
          type="text"
          name="serviceName"
          placeholder="Service name"
          value={service.serviceName}
          onChange={onChangeService}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Label>Cost</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>₹</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          aria-label="Amount (to the nearest dollar)"
          value={service.cost}
          name="cost"
          onChange={onChangeService}
        />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          type="text"
          name="description"
          placeholder="Description"
          value={service.description}
          onChange={onChangeService}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

ServiceForm.propTypes = {
  service: PropTypes.object,
  onChangeService: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default ServiceForm;
