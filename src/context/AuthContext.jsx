import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [contextValue, setContextValue] = useState('');

    const modifyContextValue = (newValue) => {
        setContextValue(newValue);
    };

    return (
        <AuthContext.Provider value={{ contextValue, setContextValue: modifyContextValue }}>
            {children}
        </AuthContext.Provider>
    );
};


export { AuthContext, AuthContextProvider };