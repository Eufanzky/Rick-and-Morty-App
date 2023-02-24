import { createContext, useState, useEffect } from "react";


export const RickAppContext = createContext();

export function RickAppContextProvider (props) {
    return (
        <RickAppContext.Provider 
        value={{

            
        }}
        >
            {props.children}
        </RickAppContext.Provider>
    )
}