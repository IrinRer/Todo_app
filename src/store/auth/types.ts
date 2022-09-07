export const AUTHORIZATION_SLICE_ALIAS = "authorization";

export interface IAuthSlice {
  email: string;
  id: number | null;
  token: string;
  inputEmail?: string;
  inputPassword?: string;
}