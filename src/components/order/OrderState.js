import { Fragment } from "react";

const OrderState = (props) => {
  return <Fragment>
    <p>Show time: {props.show.date}</p>
    <p>Seat: {props}</p>
    <p>Combo: </p>
  </Fragment>;
};
export default OrderState;
