import React from "react";
import PropTypes from "prop-types";

import DrawSeat from "./DrawSeat";
import Summary from "./Summary";
import FlightSummary from "../flights/FlightSummary";
import PassengerForm from "../passengers/PassengerForm";

import { totalSeats } from "../constants/Constants";

class SeatMap extends React.Component {
  constructor(props) {
    super(props);
    console.log("check props in seat map", this.props);
    this.state = {
      seats: totalSeats,
      bookedSeats: [],
      availableSeats: [],
      reservedSeats: [],
      checkInSeats: [],
      infantSeats: [],
      wheelChairSeats: [],
      flight: {},
      passenger: {},
      passengers: [],
      passengersPerFlight: [],
      showMap: this.props.location.state.showMap
        ? this.props.location.state.showMap
        : false,
      showPassenger: this.props.location.state.showPassenger
        ? this.props.location.state.showPassenger
        : false,
      context: this.props.location.state.context
        ? this.props.location.state.context
        : ""
    };
  }

  componentDidMount() {
    const { flightData, passengersData } = this.props.location.state;
    let bookedSeats = [];
    let checkInList = [];
    let infantSeatList = [];
    let wheelChairList = [];
    let passengersPerFlight = [];
    console.log("check flight data in seat map->", flightData);
    console.log("passenger details->", passengersData);

    debugger;
    passengersData.forEach(person => {
      if (parseInt(person.flightId) === flightData.flightId) {
        passengersPerFlight.push(person);
        bookedSeats.push(person.seatNumber);
        if (person.isCheckedIn) {
          return checkInList.push(person.seatNumber);
        }
        if (person.hasInfants) {
          return infantSeatList.push(person.seatNumber);
        }
        if (person.isWheelChairRequired) {
          return wheelChairList.push(person.seatNumber);
        }
      }
    });
    let availableSeats = this.state.seats.filter(
      item => bookedSeats.indexOf(item) < 0
    );
    console.log("AVAILABLE->", availableSeats.length);
    this.setState({ passengersPerFlight });
    this.setState({
      wheelChairSeats: wheelChairList,
      bookedSeats: bookedSeats,
      infantSeats: infantSeatList,
      checkInSeats: checkInList,
      availableSeats: availableSeats,
      flight: flightData
    });
  }

  onSeatClicked = seat => {
    console.log("seat clicked", seat);
    if (this.state.reservedSeats.indexOf(seat) > -1) {
      this.setState({
        availableSeats: this.state.availableSeats.concat(seat),
        reservedSeats: this.state.reservedSeats.filter(item => item !== seat)
      });
    } else {
      this.setState({
        reservedSeats: this.state.reservedSeats.concat(seat),
        availableSeats: this.state.availableSeats.filter(item => item !== seat)
      });
    }
  };

  handleChange = () => {
    console.log("handle change");
  };

  handleSave = () => {
    console.log("save form values");
  };

  render() {
    return (
      <>
        <FlightSummary flight={this.state.flight} />
        <div>
          <h3>Seat Map</h3>
          <DrawSeat
            seats={this.state.seats}
            available={this.state.availableSeats}
            reserved={this.state.reservedSeats}
            checkInSeats={this.state.checkInSeats}
            infantSeats={this.state.infantSeats}
            wheelChairSeats={this.state.wheelChairSeats}
            onSeatClicked={this.onSeatClicked.bind(this)}
            passengersList={this.state.passengersPerFlight}
            context={this.state.context}
          />
          <Summary
            available={this.state.availableSeats}
            booked={this.state.bookedSeats}
            reserved={this.state.reservedSeats}
          />
        </div>
        {this.state.showPassenger ? (
          <PassengerForm
            passenger={this.state.passenger}
            onChange={this.handleChange}
            onSave={this.handleSave}
          />
        ) : null}
      </>
    );
  }
}

export default SeatMap;

SeatMap.propTypes = {
  location: PropTypes.object,
  passengers: PropTypes.array
};
