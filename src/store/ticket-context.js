import React, { useReducer } from "react";
import { useState } from "react";

const TicketContext = React.createContext({})

const ticketReducer = (state, action) => {
    switch (action.type){
        case 'CHOOSE_SHOW':
            return {
                ...state,
                seatIds: action.payload.seatIds,
                combo: action.payload.combo,
                process: 'CHOOSING_SHOW'
            }
        case 'CHOOSE_SEAT':
            return {
                ...state,
                showId: action.payload.showId,
                combo: action.payload.combo,
                process: 'CHOSSING_SEAT'
            }
        case 'CHOOSE_COMBO':
            return {
                ...state,
                seatIds: action.payload.seatIds,
                showId: action.payload.showId,
                process: 'CHOSSING_COMBO'
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
    showId :'',
    seatIds: [],
    combo: {},
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
