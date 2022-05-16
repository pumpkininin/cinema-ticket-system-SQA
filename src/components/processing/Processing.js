import { Fragment, useContext, useEffect, useState } from "react";

import TicketContext from "../../store/ticket-context";
import TimeLine from "../time-line/TimeLine";
import MovieTimeTableList from "../movie/movie-timetables/MovieTimeTableList";
import TheaterRoomPage from "../../pages/theater-room-page/TheaterRoomPage";
import ComboPage from "../../pages/combo-page/ComboPage";
import AuthContext from "../../store/auth-context";
const Processing = (props) => {
  console.log(props.movie);
  const [ticketState, dispatch] = useContext(TicketContext);
  const authCtx = useContext(AuthContext);
  const [ticketData, setTicketData] = useState({});

  useEffect(() => {
    let url = `http://127.0.0.1:8080/api/staff/ticket`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: "Bearer " + authCtx.token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  switch (ticketState.process) {
    case "CHOOSING_SHOW":
      return (
        <Fragment>
          <TimeLine></TimeLine>
          <MovieTimeTableList movie={props.movie}></MovieTimeTableList>
        </Fragment>
      );
    case "CHOSSING_SEAT":
      return (
        <Fragment>
          <TheaterRoomPage />
        </Fragment>
      );
    case "CHOSSING_COMBO":
      return (
        <Fragment>
          <ComboPage />
        </Fragment>
      );
  }
};
export default Processing;
