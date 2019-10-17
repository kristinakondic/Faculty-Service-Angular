import * as fromLogin from "../actions/login.action";
import { LoginInfo } from "../../models/login-info.model";

export interface LoginState {
  data: LoginInfo;
  error: boolean;
  loading: boolean;
  isLogged: boolean;
}

export const initialState: LoginState = {
  data: { email: null, role: null },
  error: false,
  loading: false,
  isLogged: false
};

export function reducer(
  state = initialState,
  action: fromLogin.LoginAction
): LoginState {
  switch (action.type) {
    case fromLogin.LOGIN: {
      return {
        ...state,
        loading: true,
        isLogged: false
      };
    }

    case fromLogin.LOGIN_SUCCESS: {
      const response = action.payload;
      return {
        ...state,
        loading: false,
        isLogged: true,
        data: response
      };
    }

    case fromLogin.LOGIN_FAIL: {
      return {
        ...state,
        loading: false,
        isLogged: false,
        error: true
      };
    }

    case fromLogin.LOGOUT: {
      return {
        ...state,
        isLogged: false
      };
    }
  }

  return state;
}

export const getLoginLoading = (state: LoginState) => state.loading;
export const getLoginError = (state: LoginState) => state.error;
export const getLogin = (state: LoginState) => state.data;
export const getLoginRole = (state: LoginState) => state.data.role;
export const getLoginEmail = (state: LoginState) => state.data.email;
export const getLoginStatus = (state: LoginState) => state.isLogged;
