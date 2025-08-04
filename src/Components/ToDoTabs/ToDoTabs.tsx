import React, { useState } from "react";
import { useAppContext } from "../AppProvider/AppContext";
import ToDoTabUI from "../ui/ToDoTabUI";
import { TTabs } from "../../utils/types";
import { TABS } from "../../utils/constants";
import { nanoid } from "nanoid";

const ToDoTabs = () => {
  const { dispatch } = useAppContext();

  const [activeTab, setActiveTab] = useState<TTabs>("ALL_ITEMS");

  const handleClick = (tab: TTabs) => {
    setActiveTab(tab);
    dispatch({ type: tab });
  };

  const tabs = TABS.map((tab) => (
    <ToDoTabUI
      tab={tab}
      isActive={activeTab === tab}
      onClick={() => handleClick(tab)}
      key={nanoid()}
    />
  ));

  return <nav>{tabs}</nav>;
};

export default ToDoTabs;
