import React from "react";
import { useState } from "react";

const TicketContext = React.createContext({
    movieId: '',
    showId: '',
    roomId: '',
    seatIds: [],

})

export const AuthContextProvider = (props) => {
    const ticketRequest = localStorage.getItem("ticket-request")
    const [ticket, setTicket] = useState(ticketRequest)

    
    const contextValue = {
        ticket
    };


    return (
        <AuthContext.Provider value={contextValue}> 
            {props.children}
        </AuthContext.Provider>
    );
}
