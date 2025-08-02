import { createContext, useContext } from "react";
import { IAppState } from "../../utils/types";
import { ToDoActions } from "../../utils/reducer";

export interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<ToDoActions>;
}

export const initialState: IAppState = {
  toDoItems: [],
  currentTab: 'ALL_ITEMS'
};

export const AppContext = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null
})

export const useAppContext = (): IAppContext => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext() должен использоваться внутри AppContextProvider');
  }
  return context;
}
