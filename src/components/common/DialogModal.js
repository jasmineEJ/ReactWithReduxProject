import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SelectInput from "../common/SelectInput";
import Autocomplete from "../common/Autocomplete";

export default function FormDialog({
  changeMode,
  options,
  hints,
  passenger,
  updatedSeat,
  updatedMeal,
  onModalClicked
}) {
  const [open, setOpen] = useState(false);
  const [modifiedSeat, setModifiedSeat] = useState("");
  const [modifiedMeal, setModifiedMeal] = useState("");
  const [chosenSeat, setChosenSeat] = useState({});

  const handleClickOpen = () => {
    changeMode.context === "inflight" ? "" : onModalClicked();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setModifiedSeat(event.target.value);
  };

  const onChange = event => {
    console.log("meals-?", event.target.value);
    setModifiedMeal(event.target.value);
  };

  const handleChangeAuto = event => {
    setModifiedSeat(event.target.value);
  };

  const handleModifyDetail = () => {
    console.log("changed seat number is", modifiedSeat);
    if (changeMode.context === "inflight") {
      updatedMeal(passenger, modifiedMeal);
    } else {
      updatedSeat(passenger, modifiedSeat);
    }

    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {changeMode.changeLabel}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {changeMode.changeLabel} preferences
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <b>Currently chosen</b>:
            {changeMode.context === "inflight"
              ? passenger.mealPreference
              : passenger.seatNumber}
          </DialogContentText>
          {changeMode.context === "inflight" ? (
            <SelectInput
              id="mealPreferred"
              name="mealPreferred"
              label="Modify meals"
              defaultOption="Modify Meal"
              options={options.map(item => ({
                value: item.name,
                text: item.value
              }))}
              onChange={onChange}
            />
          ) : (
            <Autocomplete
              label="Modify Seat"
              placeholder="Available Seats"
              name="seatNumber"
              hints={hints}
              onChangeAuto={handleChangeAuto}
              value={modifiedSeat}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleModifyDetail} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

FormDialog.propTypes = {
  passenger: PropTypes.object,
  updatedSeat: PropTypes.func
};
