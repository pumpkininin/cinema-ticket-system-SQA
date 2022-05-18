import { useContext } from "react";

import TicketContext from "../../../store/ticket-context";

const MovieTimeItem = (props) => {
  const [state, dispatch] = useContext(TicketContext);
  const startTime = props.show.startTime.substring(11,16)
  const showId = props.show.showId;
  const chooseShowHander = () => {
      dispatch({type: 'CHOOSE_SHOW', payload: {showId: showId, seatIds: [], process:"CHOOSING_SHOW"}})
  }
  const classname = "movie-time-item col-2 m-3 " + (state.showId === showId ? "chosen-movie-time-item" : "")
  return (
    <div className={classname}  onClick={chooseShowHander}>
      <p className="m-2">{startTime}</p>
    </div>
  );
};
export default MovieTimeItem;
