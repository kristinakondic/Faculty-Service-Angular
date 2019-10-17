import { Action } from "@ngrx/store";

import { LoginInfo } from "../../models/login-info.model";

export const LOGIN = "[Login] Login";
export const LOGIN_FAIL = "[Login] Login Fail";
export const LOGIN_SUCCESS = "[Login] Login Success";
export const LOGOUT = "[Login] Logout";

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: LoginInfo) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

// action types
export type LoginAction = Login | LoginFail | LoginSuccess | Logout;
