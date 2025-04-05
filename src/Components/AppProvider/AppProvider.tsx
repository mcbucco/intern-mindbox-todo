import React, { ReactNode, useReducer } from "react";
import { AppContext, initialState } from "./AppContext";
import reducer from "../../utils/reducer";


interface IAppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<IAppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
};

export default AppContextProvider;
