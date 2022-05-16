import { useState } from "react";

const ComboItem = (props) => {
  const [isSelected, setSelection] = useState(false)
  const selectCombo = () => {
    setSelection(!isSelected)
  }
  return (
    <div
      className={`col-3 ${isSelected ? 'item-selected' : ''} item d-flex flex-column justify-content-center px-n4`}
      style={{ alignItems: "center" }}
      onClick = {selectCombo}
    >
      <img src="/image/combo.png" alt="" />
      <p className="my-2">{props.combo.comboName}</p>
      <p className="my-2">{props.combo.price}</p>
    </div>
  );
};
export default ComboItem;
