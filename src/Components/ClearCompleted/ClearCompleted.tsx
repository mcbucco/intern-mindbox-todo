import React from 'react';
import { ETypes } from "../../utils/reducer";
import { useAppContext } from "../AppProvider/AppProvider";
import ButtonUI from "../ui/ButtonUI";
import './ClearCompleted.css'

const ClearCompleted: React.FC = () => {
  const { dispatch } = useAppContext();
  const handleClick = () =>
    dispatch({ type: ETypes.ClearCompleted, payload: "clear completed" });
  return <ButtonUI className="clear" onClick={handleClick}>Clear completed</ButtonUI>;
};

export default ClearCompleted;