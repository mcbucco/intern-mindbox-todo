import React from "react";
import ButtonUI from "../ButtonUI";
import "./ToDoTabUI.css";
import clsx from "clsx";
import { TTabs } from "../../../utils/types";

interface IToDoTabUIProps {
  tab: TTabs;
  isActive: boolean;
  onClick: (tab: TTabs) => void;
}

const ToDoTabUI = ({ tab, isActive, onClick }: IToDoTabUIProps) => {
  const tabClass = clsx(
    "todoTabs-button",
    isActive && "todoTabs-button__active"
  );

  return (
    <ButtonUI className={tabClass} id={tab} onClick={() => onClick(tab)}>
      {tab}
    </ButtonUI>
  );
};

export default ToDoTabUI;
