import { Fragment, useContext, useEffect, useState } from "react";
import AuthContext from '../../store/auth-context';
import PaginationBar from "../../UI/pagination/PaginationBar";
import OrderItem from "../../components/orders/order-item/OrderItem";
import classes from "../orders/OrderPage.module.css"

const OrderPage = (props) => {
  const [orders, setOrders] = useState([])
  const [page, setPage] = useState(1)
  const [pageSize, setSize] = useState(10)

  const changPageHandler = (event) => {
    switch (event) {
      case "PREV":
        setPage(prevState => prevState - 1);
        break;
      case "NEXT":
        setPage(prevState => prevState + 1)
      default:
        setPage(parseInt(event));
    }
  }


  const authCtx = useContext(AuthContext);
  useEffect(() => {
    let url = `http://127.0.0.1:8080/api/staff/order-fulfill?page=${page}&size=${pageSize}`;
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
        console.log(data);
        setOrders(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page])
  return (
    <Fragment>
      <div className={classes.orderPage}>
        {
          orders.map((order, index) => <OrderItem key={index} order={order} />)
        }
        <PaginationBar  orders = {orders} currentPage={page} currentSize = {pageSize} handler = {changPageHandler}/>
      </div>

    </Fragment>
  );
};
export default OrderPage;
