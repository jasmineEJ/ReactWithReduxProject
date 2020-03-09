import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SeatMap from "./SeatMap";
export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [modifiedSeat, setModifiedSeat] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setModifiedSeat(event.target.value);
  };

  const handleChangedSeatNo = () => {
    console.log("changed seat number is", modifiedSeat);
    props.updatedSeat(props.passenger, modifiedSeat);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {props.modalHeading}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{props.modalHeading}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Current Seat Number: {props.passenger.seatNumber}
          </DialogContentText>
          <SeatMap />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleChangedSeatNo} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

FormDialog.propTypes = {
  passenger: PropTypes.object,
  modalHeading: PropTypes.string,
  updatedSeat: PropTypes.func
};
