import { ETabs, IAppState } from "../utils/types";
import { customId } from "./tools";

export enum ETypes {
  Add = 'ADD_TODO_ITEM',
  Delete = 'DELETE_TODO_ITEM',
  Toggle = 'TOGGLE_TODO_ITEM',
  ShowAll = 'SHOW_ALL_TODOS',
  ShowActive = 'SHOW_ACTIVE_TODOS',
  ShowCompleted = 'SHOW_COMPLETED_TODOS',
  ClearCompleted = 'CLEAR_COMPLETED_TODOS'
}

interface IActionWithPayload {
  type: ETypes.Add | ETypes.Delete | ETypes.Toggle;
  payload: string;
}

interface IActionWithNoPayload {
  type: ETypes.ShowAll | ETypes.ShowActive | ETypes.ShowCompleted | ETypes.ClearCompleted;
}

export type IAction = IActionWithNoPayload | IActionWithPayload

function reducer(state: IAppState, action: IAction) {
  switch (action.type) {
    case ETypes.Add:
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
    
      case ETypes.Delete:
        return {
          ...state,
          toDoItems: state.toDoItems.filter(item => item.id !== action.payload)
        }
    
      case ETypes.Toggle: {
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

      case ETypes.ShowAll:
        return {
          ...state,
          currentTab: ETabs.All
        }
        
      case ETypes.ShowActive:
        return {
          ...state,
          currentTab: ETabs.Active
        }

      case ETypes.ShowCompleted:
        return {
          ...state,
          currentTab: ETabs.Completed
        }
      
      case ETypes.ClearCompleted:
        return {
          ...state,
          toDoItems: state.toDoItems.filter(item => item.isDone !== true)
        }

    default:
      return state;
  }
}

export default reducer;