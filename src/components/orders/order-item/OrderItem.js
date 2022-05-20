import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketContext from "../../../store/ticket-context";
const OrderItem = (props) => {
    const [ticketState, dispatch] = useContext(TicketContext);
    const ticketClass = "row justify-content-start m-0 m-sm-2 m-md-5";
    const [checkOut, setCheckout] = useState(false);
    let navigate = useNavigate();
    const ticketStyle = {
        with: "800px",
        color: "white",
        border: "white double 5px",
        padding: "5px",
    };
    const checkOutHandler = () => {
        dispatch({ type: "CHECK_OUT" })
        navigate(`/booking/checkout`)
    }
    return <Fragment>
        <div className={ticketClass} style={ticketStyle}>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Movie Title: </strong>
                <span>{props.order.movieTitle}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Seat: </strong>
                <span>
                    {(props.order.seatLocations === undefined
                        || props.order.seatLocations === null)
                        ? ""
                        : props.order.seatLocations.map((seat) => seat + ", ")}
                </span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Date: </strong>
                <span>
                    {props.order.orderDate}
                </span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Combo: </strong>
                <span>
                    {props.order.combo.map(
                        (cb) => cb.quantity + " x " + cb.comboName + ", "
                    )}
                </span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Total price: </strong>
                <span>{props.order.totalPrice}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong></strong>
                <span></span>
            </div>
        </div>
    </Fragment>
}

export default OrderItem;