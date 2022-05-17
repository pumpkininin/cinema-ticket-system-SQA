import { useContext, useState } from "react";
import TicketContext from "../../store/ticket-context";

const Seat = (props) => {
  const [ticketState, dispatch] = useContext(TicketContext)
  const [seatArr, setSeatArr] = useState(ticketState.seatIds == null ? [] : ticketState.seatIds);
  const defaultClass = props.seat.status === "BOOKED" ? 'isSold seat px-4 py-3' : "seat px-4 py-3";


  const chooseSeatHandler = () => {
    const newSeat = ticketState.seatIds === null ? [] : ticketState.seatIds;
    newSeat.push(props.seat.id);
    dispatch({ type: "CHOOSE_SEAT", payload: { seatIds: newSeat, process: "CHOOSING_SEAT" } })
  };


  return (
    <div
      className={(seatArr.includes(props.seat.id)) ? "isSelected " + defaultClass : defaultClass}
      onClick={chooseSeatHandler}
    >
      {props.seat.seatLocation}
    </div>
  );
};
export default Seat;
