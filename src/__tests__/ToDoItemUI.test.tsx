import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ToDoItemUi from "../Components/ui/ToDoItemUi/ToDoItemUi";
import { IToDoItem } from "../utils/types";

describe("`ToDoItemUI` component test", () => {
  let mockHandleChange: jest.Mock;
  let mockHandleDelete: jest.Mock;
  let mockItem: IToDoItem;

  beforeEach(() => {
    mockItem = {
      id: "123",
      description: "123",
      isDone: false,
    };
  
    mockHandleChange = jest.fn();
    mockHandleDelete = jest.fn();
  
    render(
      <ToDoItemUi
        item={mockItem}
        onChange={mockHandleChange}
        onDelete={mockHandleDelete}
      />
    );

  })

  test("Render test", () => {
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeVisible();
    const toDoText = screen.getByText('123');
    expect(toDoText).toBeVisible();
  });
  
  test("onChange handler test", () => {
    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith("123");
  });

  test("onDelete handler test", () => {
    const deleteBtn = screen.getByRole("button");
    fireEvent.click(deleteBtn);
    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
    expect(mockHandleDelete).toHaveBeenCalledWith("123");
  });
});
