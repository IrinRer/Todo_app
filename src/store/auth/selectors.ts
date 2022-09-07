import { RootState } from "store";

export const getEmail = (state: RootState) => state.auth.inputEmail;
export const getPassword = (state: RootState) => state.auth.inputPassword;