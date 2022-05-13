import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
})

export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("cine-token")
    const [token, setToken] = useState(initialToken)

    const userLoggedIn = !!token;

    const logoutHander = () => {
        setToken(null);
        localStorage.removeItem("cine-token")
    }

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem("cine-token", token)
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