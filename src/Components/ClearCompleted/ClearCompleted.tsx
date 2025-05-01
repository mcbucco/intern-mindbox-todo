import React from 'react';
import { useAppContext } from "../AppProvider/AppContext";
import ButtonUI from "../ui/ButtonUI";
import './ClearCompleted.css'

const ClearCompleted: React.FC = () => {
  const { dispatch } = useAppContext();
  const handleClick = () =>
    dispatch({ type: 'CLEAR_COMPLETED_TODOS' });
  return <ButtonUI className="clear" onClick={handleClick}>Clear completed</ButtonUI>;
};

export default ClearCompleted;