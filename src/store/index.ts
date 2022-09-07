import { configureStore } from '@reduxjs/toolkit';
import AuthorizationReducer from './auth/slice';
import StatesTasksReducer from './states/slice';

import { IAuthSlice } from './auth/types';
import { IStatesTasks } from './states/types';

export const store = configureStore({
  reducer: {
    auth: AuthorizationReducer,
    states: StatesTasksReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = {
  auth: IAuthSlice;
  states: IStatesTasks;
};

export type AppDispatch = typeof store.dispatch;
