import React from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "../../common/ExpansionPanel";

import Flights from "../../flights/FlightsPage";
import Passengers from "../../passengers/PassengerPage";
import PassengerForm from "../../passengers/PassengerForm";
import Services from "../../ancillaryServices/AncillaryServicePage";

export default class ManagePassengerExpansionSteps extends React.Component {
  constructor(props) {
    super(props);
    console.log("Props in expansion", props);

    this.state = {
      data: [],
      pushTitle: ""
    };
    debugger;

    this.stepsMap = [
      {
        step: Flights
      },
      {
        step: Passengers
      },
      {
        step: PassengerForm
      },
      {
        step: Services
      }
    ];
  }

  dataHandler = data => {
    console.log(data, "data");
    this.setState({
      data: data
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "#ffe0e0" }}>
        <div
          style={{
            height: "px",
            width: "700px",
            fontFamily: "meiryo ,sans-serif",
            fontSize: "30px",
            fontWeight: 500,
            lineHeight: "21px",
            paddingBottom: "18px",
            paddingTop: "18px"
          }}
        >
          {"Manage Passengers"}
        </div>
        <div>
          {this.pageTitle || null}
          <ExpansionPanel
            stepsMap={this.stepsMap}
            pageDataHandler={this.dataHandler}
            {...this.props}
          />
        </div>
      </div>
    );
  }
}

ManagePassengerExpansionSteps.propTypes = {
  receivedData: PropTypes.object,
  nextHandler: PropTypes.func,
  titleValue: PropTypes.string
};
