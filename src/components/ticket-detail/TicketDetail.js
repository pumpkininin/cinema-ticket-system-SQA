import { Fragment, useContext, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import TicketContext from "../../store/ticket-context";

const TicketDetail = (props) => {
  const [ticketState, dispatch] = useContext(TicketContext);
  const ticketClass = "row justify-content-start m-0 m-sm-2 m-md-5";
  const [checkOut, setCheckout] = useState(false);
  let navigate = useNavigate(); 

  useEffect(() => {
    setCheckout(
      ticketState.showId !== null &&
        ticketState.seatIds !== null &&
        ticketState.seatIds.length !== 0
    );
  });
  const ticketStyle = {
    with: "800px",
    color: "white",
    border: "white double 5px",
    padding: "5px",
  };
  const checkOutHandler = () => {
      dispatch({type:"CHECK_OUT"})
      navigate(`/booking/checkout`)
  }
  return (
    <Fragment>
      <div className={ticketClass} style={ticketStyle}>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong>Movie Title: </strong>
          <span>{ticketState.movieTitle}</span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong>Room: </strong>
          <span>{ticketState.roomName}</span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong>Seat: </strong>
          <span>
            {(ticketState.seatLocation === undefined 
            ||ticketState.seatLocation === null)
              ? ""
              : ticketState.seatLocation.map((seat) => seat + ", ")}
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong>Date: </strong>
          <span>
            {ticketState.showDate === null
              ? ""
              : ticketState.showDate.split("T")[0]}
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong>Start time: </strong>
          <span>
            {ticketState.startTime === null
              ? ""
              : ticketState.startTime.substring(11,16)}
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong>End time:</strong>
          <span>
            {ticketState.endTime === null
              ? ""
              : ticketState.endTime.substring(11,16)}
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong>Combo: </strong>
          <span>
            {ticketState.comboIds.map(
              (combo) => combo.quantity + " x " + combo.comboName + ", "
            )}
          </span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong>Total price: </strong>
          <span>{ticketState.seatPrice + ticketState.comboPrice}</span>
        </div>
        <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
          <strong></strong>
          <span></span>
        </div>
        {(checkOut && !props.isFinal) && (
          <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2 my-3">
            <button
              className=" buy-btn p-2 w-75"
              onClick={checkOutHandler}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default TicketDetail;
