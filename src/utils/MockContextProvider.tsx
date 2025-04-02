import React, { createContext, ReactNode, useContext } from "react";
import { IAppContext } from "../Components/AppProvider/AppProvider"

const mockInitialState = {
  toDoItems: [
    {
      id: "123",
      description: "123",
      isDone: false,
      isVisible: true,
    },
    {
      id: "456",
      description: "456",
      isDone: false,
      isVisible: true,
    },
    {
      id: "789",
      description: "789",
      isDone: true,
      isVisible: true,
    },
  ]
}

export const mockDispatch = jest.fn();

export const MockContext = createContext<IAppContext>({
  state: mockInitialState,
  dispatch: mockDispatch
});

interface IMockContextProviderProps {
  children: ReactNode,
}

export const MockContextProvider: React.FC<IMockContextProviderProps> = ({ children }) => {
  const contextValue = useContext(MockContext);
  return <MockContext.Provider value={contextValue}>{children}</MockContext.Provider>
}

jest.mock('../Components/AppProvider/AppProvider', () => ({
  useAppContext: () => ({
    state: mockInitialState,
    dispatch: mockDispatch
  })
}))

export default MockContextProvider