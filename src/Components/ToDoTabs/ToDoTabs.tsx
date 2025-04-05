import React from 'react';
import { ETypes } from "../../utils/reducer";
import { useAppContext } from "../AppProvider/AppContext";
import ToDoTabsUI from "../ui/ToDoTabsUI";

const ToDoTabs: React.FC = () => {
  const { dispatch } = useAppContext();

  const handleAllClick = () =>
    dispatch({ type: ETypes.ShowAll, payload: "all" });

  const handleActiveClick = () =>
    dispatch({ type: ETypes.ShowActive, payload: "active" });

  const handleCompletedClick = () =>
    dispatch({ type: ETypes.ShowCompleted, payload: "completed" });

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
