import { createContext, useContext } from "react";
import { IAction } from "../../utils/reducer";
import { ETabs, IAppState } from "../../utils/types";

export interface IAppContext {
  state: IAppState;
  dispatch: React.Dispatch<IAction>;
}

export const initialState: IAppState = {
  toDoItems: [],
  currentTab: ETabs.All
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
