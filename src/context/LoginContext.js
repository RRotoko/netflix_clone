import { createContext } from "react";
import { validateEmail } from "../model/formular";

export const GeneralContext = createContext({});

export const GeneralProvider = ({ children }) => {

    return (
        <GeneralContext.Provider value={{validateEmail}}>
            {children}
        </GeneralContext.Provider>
    );
}