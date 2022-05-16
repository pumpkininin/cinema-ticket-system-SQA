import { Fragment, useContext, useEffect, useState } from "react";

import TicketContext from "../../store/ticket-context";
import TimeLine from "../time-line/TimeLine";
import MovieTimeTableList from "../movie/movie-timetables/MovieTimeTableList";
import TheaterRoomPage from "../../pages/theater-room-page/TheaterRoomPage";
import ComboPage from "../../pages/combo-page/ComboPage";
import AuthContext from "../../store/auth-context";
const Processing = (props) => {
  const [ticketState, dispatch] = useContext(TicketContext);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    let url = `http://127.0.0.1:8080/api/staff/ticket-fulfill`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify(ticketState),
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
        dispatch({type:"SAVE_RESPONSE", payload: data})
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ticketState.showId, ticketState.seatIds, ticketState.comboIds]);

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
