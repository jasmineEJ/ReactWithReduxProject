import React from "react";
import PropTypes from "prop-types";

const Summary = props => {
  const seatCount = props.available.length;
  return (
    <div>
      <h4>
        Available Seats ({seatCount === 0 ? "No Seats Available" : seatCount})
      </h4>
      <hr />
      <h4>Reserved Seats: ({props.booked.length})</h4>
      <ul>
        {props.booked.map(res => (
          <li key={res}>{res}</li>
        ))}
      </ul>
    </div>
  );
};

Summary.propTypes = {
  available: PropTypes.array,
  reserved: PropTypes.array,
  booked: PropTypes.array
};

export default Summary;
