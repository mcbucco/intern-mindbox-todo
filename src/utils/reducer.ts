import { nanoid } from "nanoid";
import { Action, IAppState, TTabs } from "../utils/types";

export type ToDoActions = 
  | Action<'ADD_TODO_ITEM', string>
  | Action<'DELETE_TODO_ITEM', string>
  | Action<'TOGGLE_TODO_ITEM', string>
  | Action<'CLEAR_COMPLETED_TODOS'>
  | Action<TTabs>

function reducer(state: IAppState, action: ToDoActions) {
  switch (action.type) {
    case 'ADD_TODO_ITEM':
      return {
        ...state,
        toDoItems: [
          ...state.toDoItems, 
          {
            id: nanoid(),
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

      case 'ALL_ITEMS':
        return {
          ...state,
          currentTab: 'ALL_ITEMS' as TTabs
        }
        
      case 'ACTIVE_ITEMS':
        return {
          ...state,
          currentTab: 'ACTIVE_ITEMS' as TTabs
        }

      case 'COMPLETED_ITEMS':
        return {
          ...state,
          currentTab: 'COMPLETED_ITEMS' as TTabs
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