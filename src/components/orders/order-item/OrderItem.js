import { Fragment } from "react";

const OrderItem = (props) => {
    return <Fragment>
        <div className={ticketClass} style={ticketStyle}>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Movie Title: </strong>
                <span>{props.order.movieTitle}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Seat: </strong>
                <span>
                    {(props.order.seatLocation === undefined
                        || props.order.seatLocation === null)
                        ? ""
                        : props.order.seatLocation.map((seat) => seat + ", ")}
                </span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Date: </strong>
                <span>
                    {props.order.showDate === null
                        ? ""
                        : props.order.showDate.split("T")[0]}
                </span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Combo: </strong>
                <span>
                    {props.order.comboIds.map(
                        (combo) => combo.quantity + " x " + combo.comboName + ", "
                    )}
                </span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong>Total price: </strong>
                <span>{props.order.seatPrice + props.order.comboPrice}</span>
            </div>
            <div className="col-12 col-sm-6 col-md-4 m-0 text-left p-2">
                <strong></strong>
                <span></span>
            </div>
        </div>
    </Fragment>
}

export default OrderItem;