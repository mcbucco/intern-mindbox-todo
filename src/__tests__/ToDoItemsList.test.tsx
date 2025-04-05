import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import MockContextProvider, { mockDispatch } from "../utils/MockContextProvider"
import ToDoItemsList from "../Components/ToDoItemsList"
import { ETypes } from "../utils/reducer"

describe('`ToDoItemsList` component test', () => {
  beforeEach(() => {
    render(
      <MockContextProvider>
        <ToDoItemsList />
      </MockContextProvider>
    );
    mockDispatch.mockClear();
  })

  test('Render test', () => {
    const toDoItems = screen.getAllByRole('checkbox');
    expect(toDoItems.length).toBe(3);
    expect(toDoItems[0]).not.toBeChecked();
    expect(toDoItems[1]).not.toBeChecked();
    expect(toDoItems[2]).toBeChecked();
  })

  test('Delete handler test', () => {
    const deleteBtns = screen.getAllByRole('button');
    fireEvent.click(deleteBtns[0]);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({type: ETypes.Delete, payload: '123'})
  });

  test('Toggle completion handler test', () => {
    const toDoItems = screen.getAllByRole('checkbox');
    fireEvent.click(toDoItems[0]);
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({type: ETypes.Toggle, payload: '123'})
  });
})