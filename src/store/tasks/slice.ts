import { db } from 'server/firebase';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteDoc, doc } from 'firebase/firestore';
import { TASKS_SLICE_ALIAS, ITasks } from './types';

const initialState: ITasks = {
  tasks: [],
  inputTask: '',
  completedTask: [],
};

export const statesTaskSlice = createSlice({
  name: TASKS_SLICE_ALIAS,
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Array<any>>) => {
      state.tasks = action.payload;
    },
    setInputTask: (state, action: PayloadAction<string>) => {
      state.inputTask = action.payload;
    },
    clearCompleted: (state) => {
      state.completedTask = state.tasks.filter((item) => item.ready);
      state.completedTask.forEach((item) => {
        const task = doc(db, 'tasks', item.id);
        deleteDoc(task);
      });
    },
  },
});

export const { setTasks, clearCompleted, setInputTask } =
  statesTaskSlice.actions;
export default statesTaskSlice.reducer;
