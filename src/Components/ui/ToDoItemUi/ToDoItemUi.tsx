import React from "react";
import { IToDoItem } from "../../../utils/types";
import ButtonUI from "../ButtonUI";
import "./ToDoItemUi.css";
import clsx from "clsx";

interface IToDoItemUiProps {
  item: IToDoItem;
  onChange: (id: string) => void;
  onDelete: (id: string) => void;
}

const ToDoItemUi: React.FC<IToDoItemUiProps> = ({
  item,
  onChange,
  onDelete,
}) => {
  const handleDelete = (id: string) => onDelete(id);

  const handleChange = (id: string) => onChange(id);

  const toDoClass = clsx("todo_item", item.isDone && "todo_item__isDone");

  return (
    <li className={toDoClass}>
      <label className="todo_item__label" htmlFor={item.description}>
        <input
          onChange={() => handleChange(item.id)}
          type="checkbox"
          checked={item.isDone}
          id={item.description}
          name={item.description}
        ></input>
        <span>{item.description}</span>
        <ButtonUI
          className="todo_item_delete_button"
          onClick={() => handleDelete(item.id)}
        >
          ×
        </ButtonUI>
      </label>
    </li>
  );
};

export default ToDoItemUi;
