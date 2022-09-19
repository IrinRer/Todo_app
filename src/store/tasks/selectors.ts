import { RootState } from 'store';

export const getTasks = (state: RootState) => state.tasks.tasks;
export const getCompletedTasks = (state: RootState) =>
  state.tasks.completedTask;
export const getInputTask = (state: RootState) => state.tasks.inputTask;
export const getInputState = (state: RootState) => state.tasks.inputState;
export const getNumberTasks = (state: RootState) => state.tasks.tasks.length;
export const getFilterState = (state: RootState) => state.tasks.filterState;
