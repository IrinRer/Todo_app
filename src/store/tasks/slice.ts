import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TASKS_SLICE_ALIAS, ITasks } from './types';

const initialState: ITasks = {
  tasks: [],
  completedTask: [],
};

export const statesTaskSlice = createSlice({
  name: TASKS_SLICE_ALIAS,
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Array<any>>) => {
      state.tasks = action.payload;
    },
    clearCompleted: (state) => {
      state.completedTask = state.tasks.filter((item) => item.ready);
    },
  },
});

export const { setTasks, clearCompleted } = statesTaskSlice.actions;
export default statesTaskSlice.reducer;
