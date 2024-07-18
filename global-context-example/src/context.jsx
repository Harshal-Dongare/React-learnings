import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const AppContext = ({ children }) => {
    const [name, setName] = useState("prajakta");
    return (
        <GlobalContext.Provider value={{ name, setName }}>
            {children}
        </GlobalContext.Provider>
    );
};

export default AppContext;
