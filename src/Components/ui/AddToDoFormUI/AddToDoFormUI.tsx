import React from 'react';
import clsx from "clsx";
import "./AddToDoFormUI.css";

interface IAddToDoFormUIProps {
  className?: string;
  value?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AddToDoFormUI: React.FC<IAddToDoFormUIProps> = ({
  className,
  value,
  onSubmit,
  onChange
}) => {
  const formClass = clsx("add_todo_form", className);
  return (
    <form onSubmit={onSubmit} className={formClass}>
      <li className="add_todo_form__item" key="new_todo_key">
        <input type="checkBox" disabled checked/>
        <input
          name="new_todo"
          key="new_todo"
          className="add_todo_form__text"
          type="text"
          placeholder="What needs to be done?"
          onChange={onChange}
          value={value}
        />
      </li>
    </form>
  );
};

export default AddToDoFormUI;
