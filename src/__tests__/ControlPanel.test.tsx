import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import MockContextProvider, { mockDispatch } from "../utils/MockContextProvider"
import ControlPanel from "../Components/ControlPanel"

describe('`ToDoItemsList` component test', () => {
  beforeEach(() => {
    render(
      <MockContextProvider>
        <ControlPanel />
      </MockContextProvider>
    );
    mockDispatch.mockClear()
  });

  test('Render test', () => {
    const itemsLeft = screen.getByText(/2 items left/i);
    expect(itemsLeft).toBeInTheDocument();
    
    const panelBtns = screen.getAllByRole('button');
    expect(panelBtns.length).toBe(4);
  });

  test('Tabs test', () => {
    const panelBtns = screen.getAllByRole('button').slice(0, 3);
    fireEvent.click(panelBtns[0]);
    
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'SHOW_ALL_TODOS' });

    fireEvent.click(panelBtns[1]);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'SHOW_ACTIVE_TODOS' });

    fireEvent.click(panelBtns[2]);
    expect(mockDispatch).toHaveBeenCalledWith({ type: 'SHOW_COMPLETED_TODOS' });

    expect(mockDispatch).toHaveBeenCalledTimes(3);
  });

  test('Clear completed test', () => {
    const clearBtn = screen.getAllByRole('button')[3];
    fireEvent.click(clearBtn);

    expect(mockDispatch).toHaveBeenCalledWith({ type: 'CLEAR_COMPLETED_TODOS' });
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  })
})