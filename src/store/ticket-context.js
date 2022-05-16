import React, { useReducer } from "react";
import { useState } from "react";

const TicketContext = React.createContext({})

const ticketReducer = (state, action) => {
    console.log(action.payload);
    switch (action.type) {
        case 'CHOOSE_SHOW':
            return {
                ...state,
                showId: action.payload,
                process: 'CHOOSING_SHOW'
            }
        case 'CHOOSE_SEAT':
            return {
                ...state,
                seatIds: action.payload,
                process: 'CHOSSING_SEAT'
            }
        case 'CHOOSE_COMBO':
            return {
                ...state,
                comboIds: action.payload,
                process: 'CHOSSING_COMBO'
            }
        case 'SAVE_RESPONSE':
            return {
                ...state,
                showDate: action.payload.showDate,
                startTime: action.payload.startTime,
                endTime: action.payload.endTime,
                roomId: action.payload.roomId,
                roomName: action.payload.roomName,
                seatLocation: action.seatLocation
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
    showId: '',
    showDate: '',
    startTime: '',
    endTime: '',
    roomId: '',
    roomName: '',
    seatIds: [],
    seatLocation: [],
    comboIds: {},
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
