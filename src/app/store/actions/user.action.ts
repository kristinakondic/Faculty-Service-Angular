import { Action } from "@ngrx/store";

import { User } from "../../models/user.model";
import { ChangePass } from "src/app/models/changePass.model";

export const LOAD_USER = "[User] Load User";
export const LOAD_USER_FAIL = "[User] Load User Fail";
export const LOAD_USER_SUCCESS = "[User] Load User Success";

export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor(public payload: any) {}
}

export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;
  constructor(public payload: any) {}
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: User) {}
}

export const LOAD_STUDENT = "[User] Load Student";
export const LOAD_STUDENT_FAIL = "[User] Load Student Fail";
export const LOAD_STUDENT_SUCCESS = "[User] Load Student Success";
export const CHANGE_ACCOUNT_STATUS = "[User] Change Account Status";

export class LoadStudent implements Action {
  readonly type = LOAD_STUDENT;
  constructor(public payload: any) {}
}

export class LoadStudentFail implements Action {
  readonly type = LOAD_STUDENT_FAIL;
  constructor(public payload: any) {}
}

export class LoadStudentSuccess implements Action {
  readonly type = LOAD_STUDENT_SUCCESS;
  constructor(public payload: any) {}
}

export class ChangeAccountStatus implements Action {
  readonly type = CHANGE_ACCOUNT_STATUS;
}

// change password
export const CHANGE_PASSWORD = "[ChangePass] Change Password";
export const CHANGE_PASSWORD_FAIL = "[ChangePass] Change Password Fail";
export const CHANGE_PASSWORD_SUCCESS = "[ChangePass] Change Password Success";

export class ChangePassword implements Action {
  readonly type = CHANGE_PASSWORD;
  constructor(public payload: any) {}
}

export class ChangePasswordFail implements Action {
  readonly type = CHANGE_PASSWORD_FAIL;
  constructor(public payload: any) {}
}

export class ChangePasswordSuccess implements Action {
  readonly type = CHANGE_PASSWORD_SUCCESS;
}

// action types
export type UserAction =
  | LoadUser
  | LoadUserFail
  | LoadUserSuccess
  | ChangePassword
  | ChangePasswordFail
  | ChangePasswordSuccess
  | LoadStudent
  | LoadStudentFail
  | LoadStudentSuccess
  | ChangeAccountStatus;
