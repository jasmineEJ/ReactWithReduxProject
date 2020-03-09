import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Form,
  InputGroup,
  FormControl,
  Container,
  Row,
  Col
} from "react-bootstrap";

import TextInput from "../common/TextInput";
import RadioButton from "../common/RadioButton";
import SelectInput from "../common/SelectInput";
//import MultiSelect from "../common/Multiselect";
import CalendarInput from "../common/CalendarInput";
//import { ancillary } from "../../../tools/airlines-mockdata";

import "./Passenger.css";

const genderStaticData = ["Male", "Female", "Others"];
const checkPreferredOption = [
  { name: "hasInfants" },
  { name: "isWheelChairRequired" }
];
const classAvailable = [
  { classId: 1, name: "Business" },
  { classId: 2, name: "Economy" },
  { classId: 3, name: "Premium Economy" }
];
const PassengerForm = ({
  passenger,
  onChange,
  onSave,
  saving = false,
  errors = {}
}) => {
  const [preferredOption, setPreferredOption] = useState({});
  const onChangePreferred = event => {
    const { name, value } = event.target;
    setPreferredOption({ [name]: value });
  };
  return (
    <Form className="passengerForm" onSubmit={onSave}>
      <h4 className="header-align">
        {passenger.id ? "Edit " : "Add "}Passenger
      </h4>
      <Container>
        <Row className="topSpace marginLeft">
          <Col>
            <TextInput
              id="firstName"
              name="firstName"
              label="First Name"
              value={passenger.firstName}
              onChange={onChange}
              error={errors.firstName}
            />
          </Col>
          <Col>
            <TextInput
              id="lastName"
              name="lastName"
              label="Last Name"
              value={passenger.lastName}
              onChange={onChange}
              error={errors.lastName}
            />
          </Col>
        </Row>
        <Row className="topSpace marginLeft">
          <Col>
            <TextInput
              id="age"
              name="age"
              label="Age"
              value={passenger.age}
              onChange={onChange}
            />
          </Col>
          <Col>
            <CalendarInput
              id="birthdate"
              name="birthdate"
              label="Date of Birth"
              value={passenger.birthdate}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row>
          <fieldset id="formElement" className="fieldsetBorder">
            <label htmlFor="gender">Gender</label>
            <div className="field">
              {genderStaticData.map((gender, id) => (
                <Form.Check
                  inline
                  key={gender}
                  id={`inline-gender-${id}`}
                  name="gender"
                  type="radio"
                  label={gender}
                  checked={passenger.gender === gender ? true : false}
                  onChange={onChange}
                  style={{ width: "20%" }}
                />
              ))}
            </div>
          </fieldset>
        </Row>
        <Row className="topSpace marginLeft">
          <Col>
            <TextInput
              name="city"
              label="City"
              value={passenger.city}
              onChange={onChange}
            />
          </Col>
          <Col>
            <TextInput
              name="state"
              label="State"
              value={passenger.state}
              onChange={onChange}
            />
          </Col>
          <Col>
            <TextInput
              name="country"
              label="Country"
              value={passenger.country}
              onChange={onChange}
            />
          </Col>
        </Row>
        <Row className="topSpace marginLeft">
          <Col>
            <TextInput
              name="passportNumber"
              label="Passport Number"
              value={passenger.passportNumber}
              onChange={onChange}
            />
          </Col>
          <Col className="alignCenter">
            <div className="field">
              <Form.Check
                id="isPassportAvailable"
                name="isPassportAvailable"
                type="checkbox"
                label="Do you have original passport available with you?"
                checked={passenger.isPassportAvailable ? true : false}
                onChange={onChange}
              />
            </div>
          </Col>
        </Row>
        <Row className="topSpace marginLeft">
          <Col>
            <SelectInput
              id="classPreferred"
              name="classPreferred"
              label="Preferred Class"
              defaultOption={
                passenger.classPreferred
                  ? passenger.classPreferred
                  : "Select Class"
              }
              options={classAvailable.map(item => ({
                value: item.name,
                text: item.name
              }))}
              onChange={onChange}
            />
          </Col>
          <Col>
            <TextInput
              id="seatNumber"
              name="seatNumber"
              label="Choose Seat"
              value={passenger.seatNumber}
              onChange={onChange}
            />
          </Col>
          <Col>
            <Form.Label>Flight Cost</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>₹</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Amount (to the nearest dollar)"
                defaultValue="1000"
                readOnly
                name="cost"
              />
              <InputGroup.Append>
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <Row className="topSpace marginLeft">
          <Col>
            <fieldset className="fieldsetBorder">
              <label htmlFor="selectPosition">Please Select...</label>
              <div className="field">
                {checkPreferredOption.map((option, id) => (
                  <Form.Check
                    inline
                    key={option}
                    id={`inline-preference-${id}`}
                    name="selectCheck"
                    type="checkbox"
                    label={
                      id === 0
                        ? "Do you have Infants below 2 years ?"
                        : "Do you need Wheel Chair ?"
                    }
                    value={preferredOption}
                    checked={
                      id === 0
                        ? passenger.hasInfants
                          ? true
                          : false
                        : id === 1
                        ? passenger.isWheelChairRequired
                          ? true
                          : false
                        : false
                    }
                    onChange={onChangePreferred}
                    style={{ width: "20%" }}
                  />
                ))}
              </div>
            </fieldset>
          </Col>
        </Row>

        <Row className="topSpace marginLeft">
          <Col>
            <button type="submit" disabled={saving} className="btn btn-primary">
              {saving ? "Saving..." : "Save"}
            </button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

PassengerForm.propTypes = {
  passenger: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};

export default PassengerForm;
