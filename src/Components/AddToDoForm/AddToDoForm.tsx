import React, { useState } from "react";
import AddToDoFormUI from "../ui/AddToDoFormUI";
import { useAppContext } from "../AppProvider/AppContext";

const AddToDoForm: React.FC = () => {
  const { dispatch } = useAppContext();

  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO_ITEM', payload: text });
    setText("");

  };
  return (
    <AddToDoFormUI
      value={text}
      onChange={handleChange}
      onSubmit={handleSubmit}
    ></AddToDoFormUI>
  );
};

export default AddToDoForm;
