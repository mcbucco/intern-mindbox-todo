export interface IToDoItem {
  id: string;
  description: string;
  isDone: boolean;
}

export type TTabs =
  | 'ALL_ITEMS'
  | 'ACTIVE_ITEMS'
  | 'COMPLETED_ITEMS';

export interface IAppState {
  toDoItems: IToDoItem[];
  currentTab: TTabs
}

export type Action<Type extends string, Payload = never> = [Payload] extends [never]
  ? { type: Type }
  : { type: Type, payload: Payload }