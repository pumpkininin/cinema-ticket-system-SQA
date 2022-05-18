import React, { useReducer } from "react";

const TicketContext = React.createContext({})

const ticketReducer = (state, action) => {
    switch (action.type) {
        case 'CHOOSE_SHOW':
            return {
                ...state,
                showId: action.payload.showId,
                seatIds: action.payload.seatIds,
                process: action.payload.process
            }
        case 'CHOOSE_SEAT':
            return {
                ...state,
                seatIds: action.payload.seatIds,
                seatLocation: action.payload.seatLocation,
                process: action.payload.process
            }
        case 'CHOOSE_COMBO':
            return {
                ...state,
                comboIds: action.payload.comboIds,
                comboPrice: action.payload.comboPrice,
                process: action.payload.process
            }
        case "MODIFY":
            return {

            }
        case 'SAVE_RESPONSE':
            return {
                movieId:action.payload.movieId,
                movieTitle:action.payload.movieTitle,
                showId: action.payload.showId,
                showDate: action.payload.showDate,
                startTime: action.payload.startTime,
                endTime: action.payload.endTime,
                roomId: action.payload.roomId,
                roomName: action.payload.roomName,
                seatIds: action.payload.seatIds,
                seatLocation: action.payload.seatLocation,
                seatPrice: action.payload.seatPrice,
                comboIds: action.payload.comboIds,
                comboPrice: action.payload.comboPrice,
                process: action.payload.process
            }
        case 'CHECK_OUT':
            return {
                ...state,
                process: 'CHECK_OUT'
            }
        default:
            return state;
    }

}

const initialState = {
    movieId:'',
    movieTitle:'',
    showId: '',
    showDate: '',
    startTime: '',
    endTime: '',
    roomId: '',
    roomName: '',
    seatIds: [],
    seatLocation: [],
    seatPrice: '',
    comboIds: [],
    comboPrice: '',
    process: "CHOOSING_SHOW"
}

export const TicketContextProvider = (props) => {
    const [ticketState, dispatch] = useReducer(ticketReducer, initialState)


    return (
        <TicketContext.Provider value={[ticketState, dispatch]}>
            {props.children}
        </TicketContext.Provider>
    );
}
export default TicketContext
