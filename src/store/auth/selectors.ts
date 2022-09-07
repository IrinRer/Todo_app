import { RootState } from "store";

export const getEmail = (state: RootState) => state.auth.inputEmail;
export const getPassword = (state: RootState) => state.auth.inputPassword;

export const getId = (state: RootState) => state.auth.id;
export const getToken = (state: RootState) => state.auth.token;
export const getEmailAuth = (state: RootState) => state.auth.email;
