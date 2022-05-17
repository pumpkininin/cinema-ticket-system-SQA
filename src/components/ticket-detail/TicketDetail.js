import { Fragment, useContext } from "react";
import TicketContext from "../../store/ticket-context";

const TicketDetail = (props) => {
    const [ticketState, dispatch] = useContext(TicketContext)
    const ticketClass = 'row justify-content-start' 
    const ticketStyle = {
        with: '800px',
        color: 'white',
        margin: ' 50px 250px',
        border: 'white double 5px',
        padding: '5px'
    }
    return <Fragment>
        <div className={ticketClass} style={ticketStyle}>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Movie Title: </strong><span>{ticketState.movieTitle}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Room: </strong><span>{ticketState.roomName}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Seat: </strong><span>{ticketState.seatLocation === null ? '' : ticketState.seatLocation.map(seat => seat + ", ")}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Date: </strong><span>{ticketState.showDate=== null ? '' : ticketState.showDate.split("T")[0]}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Start time: </strong><span>{ticketState.startTime === null ? '': ticketState.startTime.split("T")[1]}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>End time:</strong><span>{ticketState.endTime === null ? '': ticketState.endTime.split("T")[1]}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Combo: </strong><span>{ticketState.comboIds.map(combo =>combo.quantity + " x " + combo.comboName + ", ")}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Total price: </strong><span>{ticketState.seatPrice + ticketState.comboPrice}</span>
            </div>
        </div>
    </Fragment>;
}
export default TicketDetail;