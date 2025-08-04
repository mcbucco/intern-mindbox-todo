import React from "react";
import ButtonUI from "../ButtonUI";
import "./ToDoTabUI.css";
import clsx from "clsx";
import { TTabs } from "../../../utils/types";
import { TAB_LABELS } from "../../../utils/constants";

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
      {TAB_LABELS[tab]}
    </ButtonUI>
  );
};

export default ToDoTabUI;
