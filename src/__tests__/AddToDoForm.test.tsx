import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import MockContextProvider, { mockDispatch } from "../utils/MockContextProvider"
import AddToDoForm from "../Components/AddToDoForm"

describe('`AddToDoForm` component test', () => {
  beforeEach(() => {
    render(
      <MockContextProvider>
        <AddToDoForm />
      </MockContextProvider>
    );
    mockDispatch.mockClear()
  })

  test('Render test', () => {
    const formText = screen.getByPlaceholderText('What needs to be done?');
    expect(formText).toBeInTheDocument();
  });

  test('Submit handler test', () => {
    const formText = screen.getByPlaceholderText('What needs to be done?');
    
    fireEvent.focus(formText);
    fireEvent.submit(formText);
    
    expect(mockDispatch).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'ADD_TODO_ITEM', payload: '' });
  })
})