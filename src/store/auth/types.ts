export const AUTHORIZATION_SLICE_ALIAS = "authorization";

export interface IAuthSlice {
  auth: string;
  email?: string;
  login: string;
  password?: string;
  inputEmail?: string;
  inputPassword?: string;
}