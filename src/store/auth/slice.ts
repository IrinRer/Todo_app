import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTHORIZATION_SLICE_ALIAS, IAuthSlice } from './types';

const initialState: IAuthSlice = {
  email: '',
  id: null,
  token: '',

  inputEmail: '',
  inputPassword: '',
};

export const authorizationSlice = createSlice({
  name: AUTHORIZATION_SLICE_ALIAS,
  initialState,
  reducers: {
    authorization: (
      state,
      action: PayloadAction<{ email: string | null; id: string; token: string }>,
    ) => {
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    changeInputLogin: (state, action: PayloadAction<string>) => {
      state.inputEmail = action.payload;
    },
    changeInputPassword: (state, action: PayloadAction<string>) => {
      state.inputPassword = action.payload;
    },
    resetAuthorization: (state) => {
      state.email = initialState.email;
      state.id = initialState.id;
      state.token = initialState.token;
    },
    resetInput: (state) => {
      state.inputEmail = initialState.inputEmail;
      state.inputPassword = initialState.inputPassword;
    },
  },
});

export const {
  authorization,
  resetAuthorization,
  changeInputLogin,
  changeInputPassword,
  resetInput,
} = authorizationSlice.actions;
export default authorizationSlice.reducer;
