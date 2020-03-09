import React, { useState } from "react";
import PropTypes from "prop-types";
import { Jumbotron, Container, Row, Col, Button } from "react-bootstrap";

import RadioButton from "../common/RadioButton";

import "../common/common.css";

const SelectOption = props => {
  const [optionValue, setOptionValue] = useState({});

  const handleChange = event => {
    console.log(event.target.value);
    setOptionValue(event.target.value);
  };

  const onClickNext = event => {
    debugger;
    console.log("see the value", props);
    props.nextHandler &&
      props.nextHandler({
        data: {
          optionSelected: optionValue
        }
      });
    debugger;
    props.selectedOption(optionValue);
  };

  return (
    <Jumbotron>
      <Container className="align-radio-group">
        <Row>
          <Col>
            <RadioButton
              value="MANAGE_PASSENGERS"
              name="dashboard-manage"
              label="Manage Passengers"
              defaultChecked={optionValue === "MANAGE_PASSENGERS"}
              onChange={handleChange.bind(this)}
            />
          </Col>
          <Col>
            <RadioButton
              value="MANAGE_ANCILLARY"
              name="dashboard-manage"
              label="Manage Ancillary Services"
              defaultChecked={optionValue === "MANAGE_ANCILLARY"}
              onChange={handleChange.bind(this)}
            />
          </Col>
        </Row>
        <Row>
          <Button variant="primary" onClick={onClickNext}>
            Next
          </Button>
        </Row>
      </Container>
    </Jumbotron>
  );
};

SelectOption.propTypes = {
  nextHandler: PropTypes.func,
  selectedOption: PropTypes.func
};

export default SelectOption;
