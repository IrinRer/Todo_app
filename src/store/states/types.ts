export const STATES_TASKS_SLICE_ALIAS = 'statesTask';

export interface IStateTaskItem {
  state: string;
  color: string;
}
export interface IStatesTasks {
  states: Array<IStateTaskItem>;
}
