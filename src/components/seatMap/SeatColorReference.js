import React from "react";
import "./seatMap.css";

const SeatColorReference = ({ context }) => {
  if (context === "checkin") {
    return (
      <div className="align-ref">
        <i className="material-icons color-ref">airline_seat_recline_normal</i>
        Available Seats
        <i className="material-icons color-ref bookedBg">
          airline_seat_recline_normal
        </i>
        Reserved Seats
        <i className="material-icons color-ref reserved limeBg">
          airline_seat_recline_normal
        </i>
        Checked-in Passenger
        <i className="material-icons color-ref blugBg">accessible</i>
        Passengers with Wheel Chair
        <i className="material-icons color-ref pinkBg">child_care</i>
        Passenger with Infants
      </div>
    );
  } else {
    return (
      <div className="meal-align-ref">
        <i className="material-icons color-ref">airline_seat_recline_normal</i>
        Available Seats
        <i className="material-icons color-ref regularMealBg">free_breakfast</i>
        Regular Drinks
        <i className="material-icons color-ref specialMealBg">fastfood</i>
        Special Meals
      </div>
    );
  }
};

export default SeatColorReference;
