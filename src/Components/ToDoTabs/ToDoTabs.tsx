import React from 'react';
import { ETypes } from "../../utils/reducer";
import { useAppContext } from "../AppProvider/AppContext";
import ToDoTabsUI from "../ui/ToDoTabsUI";

const ToDoTabs: React.FC = () => {
  const { dispatch } = useAppContext();

  const handleAllClick = () =>
    dispatch({ type: ETypes.ShowAll });

  const handleActiveClick = () =>
    dispatch({ type: ETypes.ShowActive });

  const handleCompletedClick = () =>
    dispatch({ type: ETypes.ShowCompleted });

  return (
    <>
      <ToDoTabsUI
        onActiveClick={handleActiveClick}
        onAllClick={handleAllClick}
        onCompletedClick={handleCompletedClick}
      />
    </>
  );
};

export default ToDoTabs;
