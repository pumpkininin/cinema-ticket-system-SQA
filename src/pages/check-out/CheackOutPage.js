import { Fragment, useContext } from "react";
import TicketDetail from "../../components/ticket-detail/TicketDetail";
import TicketContext from "../../store/ticket-context";
import AuthContext from '../../store/auth-context';
import { useNavigate } from "react-router-dom";

const CheackOutPage = (props) => {
  const [ticketState, dispatch] = useContext(TicketContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const finishHandler = () => {
    let url = `http://127.0.0.1:8080/api/staff/order-fulfill/checkout`;
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
        console.log(data);
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
      dispatch({type: "FINISH"})
  };
  return (
    <Fragment>
      <TicketDetail isFinal={true} />
      <button className="px-3 py-2" onClick={finishHandler}>Finish</button>
    </Fragment>
  );
};
export default CheackOutPage;
