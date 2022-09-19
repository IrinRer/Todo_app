export const AUTHORIZATION_SLICE_ALIAS = "authorization";

export interface IAuthSlice {
  email: string | null;
  id: string | null;
  token: string;
  inputEmail?: string;
  inputPassword?: string;
}