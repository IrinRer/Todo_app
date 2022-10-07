import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from './auth/slice';
import StatesTasksReducer from './states/slice';
import TasksReducer from './tasks/slice';

import { IAuthSlice } from './auth/types';
import { IStatesTasks } from './states/types';
import { ITasks } from './tasks/types';

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    states: StatesTasksReducer,
    tasks: TasksReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  auth: IAuthSlice;
  states: IStatesTasks;
  tasks: ITasks;
};

export type AppDispatch = typeof store.dispatch;
