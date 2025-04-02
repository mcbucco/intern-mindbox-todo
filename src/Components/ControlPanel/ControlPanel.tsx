import React from 'react';
import ClearCompleted from '../ClearCompleted'
import LeftItemsCounter from '../LeftItemsCounter'
import ToDoTabs from '../ToDoTabs'
import './ControlPanel.css'

const ControlPanel: React.FC = () => {
  return (
    <div className='todo_stats'>
      <LeftItemsCounter/>
      <ToDoTabs/>
      <ClearCompleted />    
    </div>
  )
}

export default ControlPanel