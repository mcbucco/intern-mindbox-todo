import React, { createContext, ReactNode, useContext, useReducer } from "react";
import reducer, { IAction } from "../../utils/reducer";

export interface IToDoItem {
  id: string;
  description: string;
  isDone: boolean;
  isVisible: boolean
}

export interface IAppState {
  toDoItems: IToDoItem[];
}

const initialState: IAppState = {
  toDoItems: [],
};

export interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<IAction>;
}

const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null
})

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

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext() должен использоваться внутри AppContextProvider');
  }
  return context;
}

export default AppContextProvider;
