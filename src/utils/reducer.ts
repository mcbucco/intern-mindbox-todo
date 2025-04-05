import { ETabs, IAppState, IToDoItem } from "../utils/types";
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

export interface IAction {
  type: ETypes;
  payload: Partial<IToDoItem['id']> | string;
}

function reducer(state: IAppState, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case ETypes.Add:
      return {
        ...state,
        toDoItems: [...state.toDoItems, {
          id: customId(),
          description: payload,
          isDone: false,
          isVisible: true
        }]
      }
    
      case ETypes.Delete:
        return {
          ...state,
          toDoItems: state.toDoItems.filter(item => item.id !== payload)
        }
    
      case ETypes.Toggle: {
        return {
          ...state,
          toDoItems: state.toDoItems.map(item => {
            if (item.id === payload) return {
              ...item,
              isDone: !item.isDone
            }; else return item           
          })
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