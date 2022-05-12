import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)

    const userLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token)
    }

    const logoutHander = () => {
        setToken(null)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userLoggedIn,
        login: loginHandler,
        logout: loginHandler
    }

    return (
        <AuthContext.Provider value={contextValue}> 
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;