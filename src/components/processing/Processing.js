import { Fragment, useContext, useEffect, useState } from "react";

import TicketContext from "../../store/ticket-context";
import TimeLine from "../time-line/TimeLine";
import MovieTimeTableList from "../movie/movie-timetables/MovieTimeTableList";
import TheaterRoomPage from "../../pages/theater-room-page/TheaterRoomPage";
import ComboPage from "../../pages/combo-page/ComboPage";
import AuthContext from "../../store/auth-context";
import { useParams } from "react-router-dom";
const Processing = (props) => {
  const [ticketState, dispatch] = useContext(TicketContext);
  const authCtx = useContext(AuthContext);
  const [date, setDate] = useState(new Date().toString().substring(4, 15));
  const { movieId } = useParams()
  const [movie, setMovie] = useState(props.movie)

  const datePickerHandler = (input) => {
    let url = `http://127.0.0.1:8080/api/staff/movie?movieId=${movieId}&date=${input}`;
    fetch(url, {
      method: "GET",
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
        setMovie(data)
        dispatch({type:"CHOOSE_SHOW", payload: {showId :'', seatIds: []}})
      })
      .catch((err) => {
        console.log(err);
      });
      setDate(input)
  }
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
  }, [ticketState.process]);

  switch (ticketState.process) {
    case "CHOOSING_SHOW":
      return (
        <Fragment>
          <TimeLine datePickerHandler={datePickerHandler}></TimeLine>
          <MovieTimeTableList movie={movie}></MovieTimeTableList>
        </Fragment>
      );
    case "CHOOSING_SEAT":
      return (
        <Fragment>
          <TheaterRoomPage />
        </Fragment>
      );
    case "CHOOSING_COMBO":
      return (
        <Fragment>
          <ComboPage />
        </Fragment>
      );
  }
};
export default Processing;
