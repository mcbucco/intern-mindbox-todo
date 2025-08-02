import React from "react";
import { useAppContext } from "../AppProvider/AppContext";
import ToDoItemUi from "../ui/ToDoItemUi/ToDoItemUi";

const ToDoItemsList: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const { toDoItems, currentTab } = state;

  const handleDelete = (id: string) =>
    dispatch({type: 'DELETE_TODO_ITEM', payload: id});

  const handleChange = (id: string) =>
    dispatch({ type: 'TOGGLE_TODO_ITEM', payload: id });

  const itemsToRender =
    currentTab === 'ALL_ITEMS'
      ? toDoItems
      : currentTab === 'ACTIVE_ITEMS'
        ? toDoItems.filter((item) => item.isDone === false)
        : toDoItems.filter((item) => item.isDone === true);

  const renderedItems = itemsToRender.map((item) => (
    <ToDoItemUi
      item={item}
      key={item.id}
      onDelete={() => handleDelete(item.id)}
      onChange={() => handleChange(item.id)}
    />
  ));

  return <ul className="todo_list">{renderedItems}</ul>;
};

export default ToDoItemsList;
