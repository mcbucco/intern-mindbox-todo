import React from 'react';
import { useAppContext } from '../AppProvider/AppProvider'
import './LeftItemsCounter.css'

const LeftItemsCounter: React.FC = () => {
  const { state } = useAppContext();
  const itemsLeft = state.toDoItems.filter(item => item.isDone === false);
  return <span className='left_items'>{itemsLeft.length} items left</span>
}

export default LeftItemsCounter