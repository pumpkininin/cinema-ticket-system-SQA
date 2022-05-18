import { useContext, useState } from "react";
import TicketContext from "../../../store/ticket-context";

const ComboItem = (props) => {
  const id = props.combo.comboId;
  const [ticketState, dispatch] = useContext(TicketContext);
  const item = ticketState.comboIds.filter(combo => combo.comboId === id);
  const addComboHandler = () => {
    const combo = ticketState.comboIds;
    if (item.length === 0) {
      combo.push({ comboId: id, comboName: props.combo.comboName, price: props.combo.price, quantity: 1 })
    } else {
      for (let subCombo of combo) {
        if (subCombo.comboId === id) {
          subCombo.quantity = subCombo.quantity + 1;
        }
      }
    }
    dispatch({ type: "CHOOSE_COMBO", payload: { comboIds: combo, process: "CHOOSING_COMBO" } })
  }

  const decreaseComboHandler = () => {
    if (item.length === 0) {
      alert("You have not add this item to cart!");
      return;
    } else {
      const combo = ticketState.comboIds;
      for (let subCombo of combo) {
        if (subCombo.comboId === id) {
          if (subCombo.quantity === 1) {
            combo.pop(subCombo)
          }
          subCombo.quantity--;
        }
      }
      dispatch({ type: "CHOOSE_COMBO", payload: { comboIds: combo, process: "CHOOSING_COMBO" } })
    }
  }

  return (
    <div
      className={`col-3 item d-flex flex-column justify-content-center px-n4`}
      style={{ alignItems: "center" }}
    >
      <img src="/image/combo.png" alt="" />
      <p className="my-2">{props.combo.comboName}</p>
      <p className="my-2">{props.combo.price}</p>
      <div className="d-flex flex-row">
        <button onClick={decreaseComboHandler} className="px-3" style={{ "width": "50px" }}>-</button>
        <p className="px-3 align-center my-0">{item.length === 0 ? 0 : item[0].quantity}</p>
        <button onClick={addComboHandler} className="px-3" style={{ "width": "50px" }}>+</button>
      </div>
    </div>
  );
};
export default ComboItem;
