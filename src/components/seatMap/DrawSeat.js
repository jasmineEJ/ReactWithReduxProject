import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import SeatColorRef from "./SeatColorReference";
import "./seatMap.css";

const DrawSeat = ({
  seats,
  reserved,
  onSeatClicked,
  checkInSeats,
  infantSeats,
  wheelChairSeats,
  passengersList,
  context
}) => {
  const [icon, setIcon] = useState("airline_seat_recline_normal");
  function onClickSeat(seat) {
    console.log("seat", seat);
    return onSeatClicked(seat);
  }

  const showSeatColor = seatRow => {
    let result = {};
    let bgColor = "white";
    let iconToShow = "airline_seat_recline_normal";
    if (passengersList.length > 0) {
      passengersList.filter(passenger => {
        if (passenger.seatNumber === seatRow) {
          if (context === "checkin") {
            if (
              passenger.isCheckedIn ||
              passenger.hasInfants ||
              passenger.isWheelChairRequired
            ) {
              if (passenger.isCheckedIn) {
                iconToShow = "airline_seat_recline_normal";
                bgColor = "lime";
              }
              if (passenger.hasInfants) {
                iconToShow = "child_care";
                bgColor = "pink";
              }
              if (passenger.isWheelChairRequired) {
                iconToShow = "accessible";
                bgColor = "#b3d7ff";
              }
            } else {
              bgColor = "#adb5bd";
            }
          } else {
            if (passenger.mealPreference === "Special") {
              bgColor = "#ffc107";
              iconToShow = "fastfood";
            } else if (passenger.mealPreference === "Regular") {
              bgColor = "#00ffdc";
              iconToShow = "free_breakfast";
            }
          }
        }
      });
    }
    //setIcon(iconToShow);
    result = { bgColor: bgColor, iconToShow: iconToShow, mealIcon: iconToShow };
    return result;
  };

  return (
    <>
      <h5>
        {context === "checkin" ? "Check In " : "In flight food preference "}
        Seat Map
      </h5>
      <div className="seatMapContainer">
        <table className="grid">
          <tbody>
            <tr>
              {seats.map((seatRow, index) => {
                let result = showSeatColor(seatRow);
                let bgStyle =
                  index < seats.length - 6
                    ? { background: "white" }
                    : { background: "#b3d7ff" };
                return (
                  <td key={seatRow} style={{ background: result.bgColor }}>
                    <i
                      className={
                        reserved.indexOf(seatRow) > -1
                          ? "material-icons reserved"
                          : "material-icons available"
                      }
                      onClick={() => onClickSeat(seatRow)}
                    >
                      {context !== "checkin"
                        ? result.mealIcon
                        : result.iconToShow}
                    </i>
                    {seatRow}
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <SeatColorRef context={context} />
    </>
  );
};

DrawSeat.propTypes = {
  seats: PropTypes.array.isRequired,
  reserved: PropTypes.array.isRequired,
  checkInSeats: PropTypes.array,
  infantSeats: PropTypes.array,
  onSeatClicked: PropTypes.func,
  wheelChairSeats: PropTypes.array,
  passengersList: PropTypes.array,
  context: PropTypes.string
};

export default DrawSeat;
