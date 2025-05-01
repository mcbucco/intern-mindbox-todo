import { Action, ETabs, IAppState } from "../utils/types";
import { customId } from "./tools";

export type ToDoActions = 
  | Action<'ADD_TODO_ITEM', string>
  | Action<'DELETE_TODO_ITEM', string>
  | Action<'TOGGLE_TODO_ITEM', string>
  | Action<'SHOW_ALL_TODOS'>
  | Action<'SHOW_ACTIVE_TODOS'>
  | Action<'SHOW_COMPLETED_TODOS'>
  | Action<'CLEAR_COMPLETED_TODOS'>

function reducer(state: IAppState, action: ToDoActions) {
  switch (action.type) {
    case 'ADD_TODO_ITEM':
      return {
        ...state,
        toDoItems: [
          ...state.toDoItems, 
          {
            id: customId(),
            description: action.payload,
            isDone: false,
          }
        ]
      }
    
      case 'DELETE_TODO_ITEM':
        return {
          ...state,
          toDoItems: state.toDoItems.filter(item => item.id !== action.payload)
        }
    
      case 'TOGGLE_TODO_ITEM': {
        return {
          ...state,
          toDoItems: [...state.toDoItems.map(item => {
            if (item.id === action.payload) return {
              ...item,
              isDone: !item.isDone
            }; else return item
          })]
        }
      }

      case 'SHOW_ALL_TODOS':
        return {
          ...state,
          currentTab: ETabs.All
        }
        
      case 'SHOW_ACTIVE_TODOS':
        return {
          ...state,
          currentTab: ETabs.Active
        }

      case 'SHOW_COMPLETED_TODOS':
        return {
          ...state,
          currentTab: ETabs.Completed
        }
      
      case 'CLEAR_COMPLETED_TODOS':
        return {
          ...state,
          toDoItems: state.toDoItems.filter(item => item.isDone !== true)
        }

    default:
      return state;
  }
}

export default reducer;