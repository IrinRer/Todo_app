import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  STATES_TASKS_SLICE_ALIAS,
  IStatesTasks,
} from './types';

const initialState: IStatesTasks = {
  states: [],
};

export const statesTaskSlice = createSlice({
  name: STATES_TASKS_SLICE_ALIAS,
  initialState,
  reducers: {
    setStatesTasks: (state, action: PayloadAction<Array<any>>) => {
      state.states = action.payload;
    },
  },
});

export const { setStatesTasks } = statesTaskSlice.actions;
export default statesTaskSlice.reducer;
