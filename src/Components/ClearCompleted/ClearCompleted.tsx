import React from 'react';
import { ETypes } from "../../utils/reducer";
import { useAppContext } from "../AppProvider/AppContext";
import ButtonUI from "../ui/ButtonUI";
import './ClearCompleted.css'

const ClearCompleted: React.FC = () => {
  const { dispatch } = useAppContext();
  const handleClick = () =>
    dispatch({ type: ETypes.ClearCompleted });
  return <ButtonUI className="clear" onClick={handleClick}>Clear completed</ButtonUI>;
};

export default ClearCompleted;