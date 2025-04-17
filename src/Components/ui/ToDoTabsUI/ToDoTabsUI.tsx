import React, { useState } from "react";
import ButtonUI from "../ButtonUI";
import "./ToDoTabsUI.css";
import clsx from "clsx";

interface IToDoTabsUIProps {
  onAllClick: () => void;
  onActiveClick: () => void;
  onCompletedClick: () => void;
}

const ToDoTabsUI: React.FC<IToDoTabsUIProps> = ({
  onActiveClick,
  onAllClick,
  onCompletedClick,
}) => {
  const [[allBtnActive, activeBtnActive, completedBtnActive], setActiveBtn] =
    useState([true, false, false]);

  const handleAllClick = () => {
    setActiveBtn([true, false, false]);
    onAllClick();
  };

  const handleActiveClick = () => {
    setActiveBtn([false, true, false]);
    onActiveClick();
  };

  const handleCompletedClick = () => {
    setActiveBtn([false, false, true]);
    onCompletedClick();
  };

  const allBtnClass = clsx("allBtn", allBtnActive && "allBtn__active");
  const activeBtnClass = clsx(
    "activeBtn",
    activeBtnActive && "activeBtn__active"
  );
  const completedBtnClass = clsx(
    "completedBtn",
    completedBtnActive && "completedBtn__active"
  );

  return (
    <nav className="todo_stats_buttons">
      <ButtonUI className={allBtnClass} onClick={handleAllClick}>
        All
      </ButtonUI>
      <ButtonUI
        className={activeBtnClass}
        id="activeBtn"
        onClick={handleActiveClick}
      >
        Active
      </ButtonUI>
      <ButtonUI
        className={completedBtnClass}
        id="completedBtn"
        onClick={handleCompletedClick}
      >
        Completed
      </ButtonUI>
    </nav>
  );
};

export default ToDoTabsUI;
