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
  const [allBtnActive, setAllBtnActive] = useState(true);
  const [activeBtnActive, setActiveBtnActive] = useState(false);
  const [completedBtnActive, setCompletedBtnActive] = useState(false);

  const handleAllClick = () => {
    setAllBtnActive(true);
    setActiveBtnActive(false);
    setCompletedBtnActive(false);
    onAllClick()
  }

  const handleActiveClick = () => {
    setActiveBtnActive(true);
    setAllBtnActive(false);
    setCompletedBtnActive(false)
    onActiveClick()
  }

  const handleCompletedClick = () => {
    setCompletedBtnActive(true);
    setActiveBtnActive(false);
    setAllBtnActive(false);
    onCompletedClick()
  }

  const allBtnClass = clsx('allBtn', allBtnActive && 'allBtn__active');
  const activeBtnClass = clsx('activeBtn', activeBtnActive && 'activeBtn__active');
  const completedBtnClass = clsx('completedBtn', completedBtnActive && 'completedBtn__active');
  return (
    <div className="todo_stats_buttons">
      <ButtonUI className={allBtnClass} id="allBtn" onClick={handleAllClick}>
        All
      </ButtonUI>
      <ButtonUI className={activeBtnClass} id="activeBtn" onClick={handleActiveClick}>
        Active
      </ButtonUI>
      <ButtonUI className={completedBtnClass} id="completedBtn" onClick={handleCompletedClick}>
        Completed
      </ButtonUI>
    </div>
  );
};

export default ToDoTabsUI;
