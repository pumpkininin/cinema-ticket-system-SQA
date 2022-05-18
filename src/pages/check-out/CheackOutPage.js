import { Fragment, useContext } from "react";
import TicketDetail from "../../components/ticket-detail/TicketDetail";
import TicketContext from "../../store/ticket-context";
import AuthContext from '../../store/auth-context';

const CheackOutPage = (props) => {
  const [ticketState, dispatch] = useContext(TicketContext);
  const authCtx = useContext(AuthContext);
  const finishHandler = () => {
    let url = `http://127.0.0.1:8080/api/staff/order-fulfill`;
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      <TicketDetail isFinal={true} />
      <button className="px-3 py-2" onClick={finishHandler}>Finish</button>
    </Fragment>
  );
};
export default CheackOutPage;
