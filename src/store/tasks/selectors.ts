import { RootState } from 'store';

export const getTasks = (state: RootState) => state.tasks.tasks;
export const getCompletedTasks = (state: RootState) =>
  state.tasks.completedTask;
export const getInputTask = (state: RootState) => state.tasks.inputTask;
export const getInputState = (state: RootState) => state.tasks.inputState;
