import { useState } from "react";

const Seat = (props) => {
    const [isSelected, setSelected] = useState(false);
    const [isSold, setSold] = useState(false);
    const defaultClass =isSold ? 'isSold seat px-4 py-3' : "seat px-4 py-3";
    const toggleClass = () => {
    setSelected(!isSelected);
  };

  return (
    <div
      className={isSelected ? "isSelected " + defaultClass : defaultClass}
      onClick={toggleClass}
    >
      A1
    </div>
  );
};
export default Seat;
