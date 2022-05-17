
import { useContext } from "react";

import TicketContext from "../../store/ticket-context";

const BreadCrumb = (props) => {

    const btnDefaultClass = "p-4 breadcumb-btn "

    const [state, dispatch] = useContext(TicketContext);

    const choseShowHandler = (event) => {
        switch (event) {
            case "show":
                dispatch({
                    type: "CHOOSE_SHOW",
                    payload: {showId: state.showId, process: "CHOOSING_SHOW"},
                });
                break;
            case "seat":
                if (state.showId === '') {
                    alert("You need to choose show first!");
                    return;
                }
                dispatch({
                    type: "CHOOSE_SEAT",
                    payload:  {seatIds: state.seatIds, process: "CHOOSING_SEAT"},
                });
                break;
            case "combo":
                dispatch({
                    type: "CHOOSE_COMBO",
                    payload:  {comboIds: state.comboIds, process: "CHOOSING_COMBO"},
                });
                break;
        }
    };

    return (
        <div className="my-5 buttons d-flex flex-row justify-content-center">
            <button
                className={(state.process === 'CHOOSING_SHOW') ? 'breadcumb-active ' + btnDefaultClass : btnDefaultClass}
                onClick={() => choseShowHandler("show")}
            >
                Show
            </button>
            <button
                className={(state.process === 'CHOOSING_SEAT') ? 'breadcumb-active ' + btnDefaultClass : btnDefaultClass}
                onClick={() => choseShowHandler("seat")}
            >
                Seat
            </button>
            <button
                className={(state.process === 'CHOOSING_COMBO') ? 'breadcumb-active ' + btnDefaultClass : btnDefaultClass}
                onClick={() => choseShowHandler("combo")}
            >
                Combo
            </button>
        </div>
    )
}


export default BreadCrumb;