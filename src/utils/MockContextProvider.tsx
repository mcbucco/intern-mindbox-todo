import React, { createContext, ReactNode, useContext } from "react";
import {
  IAppContext
} from "../Components/AppProvider/AppContext";
import { ETabs, IAppState } from "./types";

const mockInitialState: IAppState = {
  currentTab: ETabs.All,
  toDoItems: [
    {
      id: "123",
      description: "123",
      isDone: false,
    },
    {
      id: "456",
      description: "456",
      isDone: false,
    },
    {
      id: "789",
      description: "789",
      isDone: true,
    },
  ],
};

export const mockDispatch = jest.fn();

export const MockContext = createContext<IAppContext>({
  state: mockInitialState,
  dispatch: mockDispatch,
});

interface IMockContextProviderProps {
  children: ReactNode;
}

export const MockContextProvider: React.FC<IMockContextProviderProps> = ({
  children,
}) => {
  const contextValue = useContext(MockContext);
  return (
    <MockContext.Provider value={contextValue}>{children}</MockContext.Provider>
  );
};

jest.mock("../Components/AppProvider/AppContext", () => ({
  useAppContext: () => ({
    state: mockInitialState,
    dispatch: mockDispatch,
  }),
}));

export default MockContextProvider;
