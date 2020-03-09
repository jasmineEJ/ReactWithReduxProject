import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

import SelectInput from "../common/SelectInput";
import PassengerList from "./PassengerList";
import * as PassengerActions from "../../react-redux-airlines/actions/passengerActions";
import * as FlightActions from "../../react-redux-airlines/actions/flightActions";
import * as AnicillaryServiceActions from "../../react-redux-airlines/actions/ancillaryServiceActions";
import * as FilterActions from "../../react-redux-airlines/actions/filterActions";
const filterCondition = [
  { filterBy: "checkedIn", name: "Checked In" },
  { filterBy: "wheelChair", name: "Wheel Chair" },
  { filterBy: "infant", name: "Infant" }
];

const missingMandatoryDocs = [
  { filterBy: "passport", name: "Passport" },
  { filterBy: "address", name: "Address" },
  { filterBy: "dob", name: "Date Of Birth" }
];
class PassengersPage extends React.Component {
  state = {
    filteredCondition: "",
    resultantPassengerList: [],
    showPassengers: false,
    context: this.props.location ? this.props.location.state.context : ""
  };
  componentDidMount() {
    debugger;
    console.log("passenger page", this.state);
    const { passengers, flights, actions, ansServices } = this.props;

    if (passengers.length === 0) {
      actions.getAllPassengers().catch(error => {
        throw error;
      });
    }

    if (flights.length === 0) {
      actions.getAllFlightDetails().catch(error => {
        throw error;
      });
    }
    if (ansServices.length === 0) {
      actions.loadAncillaryServices().catch(error => {
        alert("Ancillary service Details loading failed", error);
      });
    }
  }

  componentDidUpdate(prevState, nextProps) {
    console.log("current update props passengers", this.props);
    console.log("component update state", prevState);
    console.log("nextprops passengers->", nextProps);
    return (nextProps.resultantPassengers = this.props.resultantPassengers);
  }

  resetFilter = () => {
    return this.props.actions.getAllPassengers().catch(error => {
      throw error;
    });
  };

  handleDeletePassenger = async passenger => {
    try {
      await this.props.actions.deletePassengerById(passenger);
    } catch (error) {
      throw error;
    }
  };

  handleUpdateSeat = (passenger, seat) => {
    console.log("modified seat value->", seat, "**id->", passenger.id);
    if (seat !== "") {
      this.props.actions
        .updateSeat(passenger, seat)
        .then(() => {
          console.log("success");
        })
        .catch(error => {
          throw error;
        });
    }
  };

  handleUpdateMeal = (passenger, meal) => {
    console.log("modified meal->", meal);
    if (meal !== "") {
      this.props.actions
        .updateMeal(passenger, meal)
        .then(() => {
          console.log("success");
        })
        .catch(error => {
          throw error;
        });
    }
  };

  handleChange = event => {
    this.setState({ filteredCondition: event.target.value });
  };

  render() {
    return (
      <>
        <Container className="filter-section">
          <Row>
            <Col>
              <SelectInput
                name="filterCondition"
                label="Filter By"
                defaultOption="Select a filter"
                options={filterCondition.map(condition => ({
                  value: condition.filterBy,
                  text: condition.name
                }))}
                onChange={this.handleChange}
                value={this.state.filteredCondition}
              />
            </Col>
            <Col>
              <SelectInput
                name="missingMandatoryDocFilter"
                label="Filter By Missing mandatory requirements"
                defaultOption="Select a filter"
                options={missingMandatoryDocs.map(condition => ({
                  value: condition.filterBy,
                  text: condition.name
                }))}
                onChange={this.handleChange}
                value={this.state.filteredCondition}
              />
            </Col>
          </Row>
          <Row>
            <Button
              style={{
                display: "inline-flex",
                marginRight: "50px",
                marginLeft: "15px"
              }}
              onClick={() =>
                this.props.actions.searchByFilters(this.state.filteredCondition)
              }
            >
              Search
            </Button>
            <Button onClick={this.resetFilter}>Clear</Button>
          </Row>
        </Container>

        <h2>Passenger List</h2>
        <PassengerList
          context={this.state.context}
          passengers={
            this.props.showPassengers
              ? this.props.resultantPassengers
              : this.props.passengers
          }
          updateSeat={this.handleUpdateSeat}
          updateMeal={this.handleUpdateMeal}
          onDeleteClick={this.handleDeletePassenger}
          servicesOffered={this.props.ansServices}
          flights={this.props.flights}
        />
      </>
    );
  }
}

PassengersPage.propTypes = {
  passengers: PropTypes.array,
  flights: PropTypes.array,
  actions: PropTypes.object,
  searchByFilters: PropTypes.func,
  ansServices: PropTypes.array,
  loadAncillaryServices: PropTypes.func,
  location: PropTypes.object,
  resultantPassengers: PropTypes.array,
  showPassengers: PropTypes.bool
};

export const showPassengersPerFlight = (passengersData, id) => {
  return passengersData && passengersData.length > 0
    ? passengersData.filter(passenger => parseInt(passenger.flightId) === id)
    : [];
};

function mapStateToProps(state, selfProps) {
  debugger;
  console.log("map state to props");
  let resultantPassengerList = [];
  const { showPassengers, flightData } = selfProps.location
    ? selfProps.location.state
    : "";
  if (showPassengers && state.passengers && state.passengers.length > 0) {
    resultantPassengerList = showPassengersPerFlight(
      state.passengers,
      flightData.flightId
    );
  } else {
    resultantPassengerList = state.passengers;
  }

  return {
    showPassengers: showPassengers ? showPassengers : false,
    resultantPassengers:
      resultantPassengerList.length === 0 ? [] : resultantPassengerList,
    /*passengers:
      state.flights.length === 0
        ? []
        : state.passengers.map(passenger => {
            const bookedFlight = state.flights.find(item =>
              item.flightId
                ? item.flightId === parseInt(passenger.flightId)
                : ""
            );
            return {
              ...passenger,
              flightName: bookedFlight ? bookedFlight.flightName : ""
            };
          }),*/
    passengers: state.passengers.length > 0 ? state.passengers : [],
    flights: state.flights,
    ansServices: state.ancillaryServices
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    actions: {
      getAllPassengers: bindActionCreators(
        PassengerActions.loadPassengers,
        dispatch
      ),
      getAllFlightDetails: bindActionCreators(
        FlightActions.loadFlights,
        dispatch
      ),
      deletePassengerById: bindActionCreators(
        PassengerActions.deletePassenger,
        dispatch
      ),
      searchByFilters: bindActionCreators(FilterActions.applyFilters, dispatch),
      loadAncillaryServices: bindActionCreators(
        AnicillaryServiceActions.loadAncillaryServices,
        dispatch
      ),
      updateSeat: bindActionCreators(PassengerActions.updateSeat, dispatch),
      updateMeal: bindActionCreators(PassengerActions.updateMeal, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassengersPage);
