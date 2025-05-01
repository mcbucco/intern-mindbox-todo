import React from 'react';
import { useAppContext } from "../AppProvider/AppContext";
import ToDoTabsUI from "../ui/ToDoTabsUI";

const ToDoTabs: React.FC = () => {
  const { dispatch } = useAppContext();

  const handleAllClick = () =>
    dispatch({ type: 'SHOW_ALL_TODOS' });

  const handleActiveClick = () =>
    dispatch({ type: 'SHOW_ACTIVE_TODOS' });

  const handleCompletedClick = () =>
    dispatch({ type: 'SHOW_COMPLETED_TODOS' });

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
