import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import {} from "../../react-redux-airlines/actions/passengerActions";

import Modal from "../common/DialogModal";
import { totalSeats, mealsPreferred } from "../constants/Constants";

const PassengerList = ({
  passengers,
  onDeleteClick,
  servicesOffered,
  updateSeat,
  updateMeal,
  flights,
  context
}) => {
  const [changeMode, setChangeMode] = useState({});
  const [hints, setHints] = useState([]);

  useEffect(() => {
    let change = changeOption(context);
    console.log("object->", change);
    setChangeMode(change);
  }, []);

  const changeOption = contextParam => {
    let obj = {};
    obj.context = contextParam;
    if (contextParam === "inflight") {
      obj.header = "Meal Preference";
      obj.changeLabel = "Change Meals";
      obj.options = mealsPreferred;
    } else {
      obj.header = "Seat Number";
      obj.changeLabel = "Change Seat";
      obj.options =
        passengers.length > 0 && flights.length > 0
          ? findAvailableSeats(passengers, flights)
          : [];
    }
    return obj;
  };

  const onModalClicked = () => {
    let options = [];
    options =
      passengers.length > 0 && flights.length > 0
        ? findAvailableSeats(passengers, flights)
        : [];
    setHints(options);
  };

  const showMeal = mealPreference => {
    let meals = "";
    if (mealPreference === "Special") {
      meals = "Special Meals";
    } else if (mealPreference === "Regular") {
      meals = "Regular Meals";
    }
    return meals;
  };

  return (
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Passenger Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>{changeMode.header}</th>
          <th>Ancillary Services</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {passengers.map(passenger => {
          return (
            <tr key={passenger.id}>
              <td>{passenger.firstName}</td>
              <td>{passenger.age}</td>
              <td>{passenger.gender}</td>
              <td>
                {context === "inflight"
                  ? showMeal(passenger.mealPreference)
                  : passenger.seatNumber}
                <Modal
                  changeMode={changeMode}
                  defaultValue={passenger.mealPreference}
                  options={mealsPreferred}
                  hints={hints}
                  passenger={passenger}
                  updatedSeat={updateSeat}
                  updatedMeal={updateMeal}
                  onModalClicked={onModalClicked}
                />
              </td>
              <td>
                <ul>
                  {servicesOffered && servicesOffered.length > 0
                    ? showServicesPerPassenger(
                        servicesOffered,
                        passenger.chosenServices
                      )
                    : ""}
                </ul>
              </td>
              <td>
                <Link to={"/app/passenger/" + passenger.id}>
                  <Button variant="primary">Edit</Button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export const showServicesPerPassenger = (services, chosen) => {
  debugger;
  let serviceList = [];
  for (let i = 0; i < chosen.length; i++) {
    for (let j = 0; j < services.length; j++) {
      services[j].id === chosen[i]
        ? serviceList.push(services[j].serviceName)
        : "";
    }
  }
  /*let serviceList =
    services && services.length > 0
      ? services.filter(service => {
          console.log("services->", services);
          chosen.forEach(item =>
            service.id === chosen[item] ? service.serviceName : "ERROR"
          );
        })
      : [];*/
  console.log("service list->", serviceList);
  return serviceList;
};

export const findAvailableSeats = (passengerData, flightData) => {
  debugger;
  let bookedSeats = [];
  if (passengerData.length > 0 && flightData.length > 0) {
    passengerData.forEach(person => {
      bookedSeats.push(person.seatNumber);
    });
  }
  console.log("booked", bookedSeats);
  let availableSeats = totalSeats.filter(item => bookedSeats.indexOf(item) < 0);
  return availableSeats;
};

PassengerList.propTypes = {
  passengers: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  filterPassengerByCheckedIn: PropTypes.array,
  servicesOffered: PropTypes.array,
  updateSeat: PropTypes.func,
  context: PropTypes.string
};

export default PassengerList;
