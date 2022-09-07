import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AUTHORIZATION_SLICE_ALIAS, IAuthSlice } from './types';

const initialState: IAuthSlice = {
  auth: '',
  login: '',
  password: '',
  inputEmail: '',
  inputPassword: '',
};

export const authorizationSlice = createSlice({
  name: AUTHORIZATION_SLICE_ALIAS,
  initialState,
  reducers: {
    authorization: (state) => {
      if (
        state.inputEmail === state.login &&
        state.inputPassword === state.password
      ) {
        state.auth = 'yes';
      } else {
        state.auth = 'no';
      }
    },
    changeInputLogin: (state, action: PayloadAction<string>) => {
      state.inputEmail = action.payload;
    },
    changeInputPassword: (state, action: PayloadAction<string>) => {
      state.inputPassword = action.payload;
    },
    resetAuthorization: (state) => {
      state.auth = initialState.auth;
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
} = authorizationSlice.actions;
export default authorizationSlice.reducer;