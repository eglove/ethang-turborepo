export type UserContextType = {
  currentUser: string | null;
  error: string | null;
  isLoading: boolean;
};

export type UserReducerType =
  | 'user/SET_CURRENT_USER'
  | 'user/CHECK_USER_SESSION'
  | 'user/GOOGLE_SIGN_IN_START'
  | 'user/EMAIL_SIGN_IN_START'
  | 'user/SIGN_IN_SUCCESS'
  | 'user/SIGN_IN_FAIL'
  | 'user/SIGN_UP_START'
  | 'user/SIGN_UP_SUCCESS'
  | 'user/SIGN_UP_FAIL'
  | 'user/SIGN_OUT_START'
  | 'user/SIGN_OUT_SUCCESS'
  | 'user/SIGN_OUT_FAIL';

export type UserReducerReturn<Type extends UserReducerType> =
  Type extends 'user/SET_CURRENT_USER' ? string | null : null;

export type UserReducerAction<Type extends UserReducerType> = {
  payload: UserReducerReturn<Type>;
  type: Type;
};
