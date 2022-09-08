import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TASKS_SLICE_ALIAS, ITasks } from './types';

const initialState: ITasks = {
  tasks: [],
};

export const statesTaskSlice = createSlice({
  name: TASKS_SLICE_ALIAS,
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Array<any>>) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = statesTaskSlice.actions;
export default statesTaskSlice.reducer;
