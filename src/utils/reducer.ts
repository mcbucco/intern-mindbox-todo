import { IAppState, IToDoItem } from "../Components/AppProvider/AppProvider";
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
        toDoItems: [...state.toDoItems, {
          id: customId(),
          description: payload,
          isDone: false,
          isVisible: true
        }]
      }
    
      case ETypes.Delete:
        return {
          toDoItems: state.toDoItems.filter(item => item.id !== payload)
        }
    
      case ETypes.Toggle: {
        return {
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
          toDoItems: state.toDoItems.map(item => ({...item, isVisible: true}))
        }
        
      case ETypes.ShowActive:
        return {
          toDoItems: state.toDoItems.map(item => {
            if (item.isDone === false) return {
                ...item,
                isVisible: true
              }; else return {...item, isVisible: false}
          })
        }

      case ETypes.ShowCompleted:
        return {
          toDoItems: state.toDoItems.map(item => {
            if (item.isDone === true) return {
                ...item,
                isVisible: true
              }; else return {...item, isVisible: false}
          })
        }
      
      case ETypes.ClearCompleted:
        return {
          toDoItems: state.toDoItems.filter(item => item.isDone !== true)
        }

    default:
      return state;
  }
}

export default reducer;