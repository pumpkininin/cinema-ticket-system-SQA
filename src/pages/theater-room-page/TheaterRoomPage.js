import { useState, useContext, useEffect, Fragment } from "react";
import SeatRow from "../../components/seat-row/SeatRow";
import AuthContext from "../../store/auth-context";
import TicketContext from "../../store/ticket-context";

const TheaterRoomPage = (props) => {
  const [seats, setSeats] = useState([]);
  const [ticketState, dispatch]  = useContext(TicketContext)
  const authCtx = useContext(AuthContext)

  useEffect(() => {
    let url = `http://127.0.0.1:8080/api/staff/show/unavailableSeat/${ticketState.showId}`;
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
      .then((data) => data.sort((a, b) => a.seatLocation > b.seatLocation ? 1 : -1))
      .then((data) => {
        for( let i = 0; i < data.length; i+=10){
          let added = data.slice(i, i+ 10);
          added.sort((a,b) => a.id > b.id ? 1: -1);
          setSeats(prevState => [...prevState, added])
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ticketState.process])
  
  return (
    <Fragment>
      <div className="screen d-flex flex-column justify-content-center mx-3 mt-5">
        <div style={{ backgroundColor: "#767676" }}>
          <h1
            style={{ color: "white", textAlign: "center" }}
            className="py-2 px-n2"
          >
            Screen
          </h1>
        </div>
      </div>
      <div className="seat-selection mt-5 mx-3 px-n2 py-5">
        {
          seats.map((seatArr,index) => <SeatRow key={index} seatArr={seatArr}/>)
        }
      </div>
      <div className="note-section row">
        <div className="col-3">
          <div className="note my-1 row align-items-center justify-content-center">
            <div className="seat px-4 py-3" style={{pointerEvents: "none"}}>
              A1
            </div>
            <div className="offset-1">
              <strong className="align-middle" style={{color: "white"}}>
                Avaliable
              </strong>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="note my-1 row align-items-center justify-content-center">
            <div
              className="seat isSelected px-4 py-3"
              style={{pointerEvents: "none"}}
            >
              A1
            </div>
            <div className="offset-1">
              <strong className="align-middle" style={{color: "white"}}>
                Selected
              </strong>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="note my-1 row align-items-center justify-content-center">
            <div
              className="seat isSold px-4 py-3"
              style={{ pointerEvents: "none" }}
            >
              A1
            </div>
            <div className="offset-1">
              <strong className="align-middle" style={{ color: "white" }}>
                Sold
              </strong>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TheaterRoomPage;
