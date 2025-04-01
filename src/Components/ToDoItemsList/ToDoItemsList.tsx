import React from "react";
import { useAppContext } from "../AppProvider/AppProvider";
import ToDoItemUi from "../ui/ToDoItemUi/ToDoItemUi";
import { ETypes } from "../../utils/reducer";

const ToDoItemsList: React.FC = () => {
  const { state, dispatch } = useAppContext();

  const handleDelete = (id: string) => dispatch({type: ETypes.Delete, payload: id})

  const handleChange = (id: string) => dispatch({type: ETypes.Toggle, payload: id})

  const items = state.toDoItems.length > 0
    ? state.toDoItems.map((item) => (
      item.isVisible && <ToDoItemUi
        item={item}
        key={item.id}
        onDelete={() => handleDelete(item.id)}
        onChange={() => handleChange(item.id)}
      />
    ))
    : []

  return <ul className="todo_list">{items}</ul>
};

export default ToDoItemsList;
