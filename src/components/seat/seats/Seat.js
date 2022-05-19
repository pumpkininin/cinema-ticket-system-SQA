import { useContext, useEffect, useState } from "react";
import TicketContext from "../../../store/ticket-context";

const Seat = (props) => {
  const seatId = props.seat.id;
  const [ticketState, dispatch] = useContext(TicketContext);
  const [seatArr, setSeatArr] = useState(
    ticketState.seatIds == null ? [] : ticketState.seatIds
  );
  const [status, setStatus] = useState(props.seat.status);
  const [defaultClass, setDefaultClass] = useState("seat px-4 py-3");

  useEffect(() => {
    if (status === "BOOKED"){
      return;
    }else{
      setStatus(seatArr.includes(seatId) ? "SELECTED" : "AVAILABLE");
    }
  }, [ticketState.process]);

  useEffect(() => {
    if (status === "SELECTED") {
      setDefaultClass("isSelected seat px-4 py-3");
    } else if (status === "AVAILABLE") {
      setDefaultClass("seat px-4 py-3");
    } else if (status === "BOOKED") {
      setDefaultClass("isSold seat px-4 py-3");
    }
  }, [status]);

  const chooseSeatHandler = () => {
    let newSeat = ticketState.seatIds === null ? [] : ticketState.seatIds;
    let newSeatLoc =
      ticketState.seatLocation === null ? [] : ticketState.seatLocation;
    if (status === "AVAILABLE") {
      setStatus("SELECTED");
      newSeat.push(props.seat.id);
      newSeatLoc.push(props.seat.seatLocation);
    } else {
      newSeat = newSeat.filter(seat => seat !== props.seat.id);
      newSeatLoc = newSeatLoc.filter(loc => loc !== props.seat.seatLocation);
      setStatus("AVAILABLE");
    }
    dispatch({
      type: "CHOOSE_SEAT",
      payload: {
        seatIds: newSeat,
        seatLocation: newSeatLoc,
        process: "CHOOSING_SEAT",
      },
    });
  };

  return (
    <div className={defaultClass} id={props.seat.id} onClick={chooseSeatHandler}>
      {props.seat.seatLocation}
    </div>
  );
};
export default Seat;
