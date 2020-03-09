import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import PassengerForm from "./PassengerForm";
import { newPassenger } from "../../../tools/airlines-mockdata";
import {
  savePassenger,
  loadPassengers
} from "../../react-redux-airlines/actions/passengerActions";

const ManagePassengers = ({
  passengers,
  loadPassengers,
  savePassenger,
  history,
  ...props
}) => {
  const [passenger, setPassenger] = useState({ ...props.passenger });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (passengers.length === 0) {
      loadPassengers().catch(error => {
        throw error;
      });
    } else {
      setPassenger({ ...props.passenger });
    }
  }, [props.passengers]);

  function handleChange(event) {
    console.log("event-?", event);
    const { name, value } = event.target;
    setPassenger(prevPassengerData => ({
      ...prevPassengerData,
      [name]: value
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    setSaving(true);
    savePassenger(passenger)
      .then(() => {
        console.log("saved SUCCESD");
        history.push("/app/passengers");
      })
      .catch(error => {
        setSaving(false);
        throw error;
      });
  }

  return (
    <PassengerForm
      passenger={passenger}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
};

ManagePassengers.propTypes = {
  passengers: PropTypes.array.isRequired,
  passenger: PropTypes.object,
  savePassenger: PropTypes.func.isRequired,
  loadPassengers: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export function getPassengerById(passengers, id) {
  return passengers.find(passenger => passenger.id === parseInt(id));
}

function mapStateToProps(state, ownProps) {
  let idShownInURL = ownProps.match.params.id;
  console.log("idShownInURL->", idShownInURL);
  console.log("state->", state);
  let passenger =
    idShownInURL && state.passengers.length > 0
      ? getPassengerById(state.passengers, idShownInURL)
      : newPassenger;
  return {
    passengers: state.passengers,
    passenger
  };
}

const mapDispatchToProps = {
  loadPassengers,
  savePassenger
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagePassengers);
