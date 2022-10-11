export const TASKS_SLICE_ALIAS = 'tasks';

export interface ITaskItem {
  description: string;
  state: string;
  ready: boolean;
  id: string;
}
export interface ITasks {
  tasks: Array<ITaskItem>;
  completedTask: Array<ITaskItem>;
  inputTask: string;
  inputState: string;
  filterState: string | null;
}
