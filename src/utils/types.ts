export interface IToDoItem {
  id: string;
  description: string;
  isDone: boolean;
}

export enum ETabs {
  All = 'ALL_ITEMS',
  Active = 'ACTIVE_ITEMS',
  Completed = 'COMPLETED_ITEMS'
}

export interface IAppState {
  toDoItems: IToDoItem[];
  currentTab: ETabs
}

export type Action<Type extends string, Payload = never> = [Payload] extends [never]
  ? { type: Type }
  : { type: Type, payload: Payload }