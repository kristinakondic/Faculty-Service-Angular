import { Action } from "@ngrx/store";

import { FieldsOfStudy } from "src/app/models/fieldsOfStudy.model";

// load fieldsOfStudys
export const LOAD_FIELDS_OF_STUDY = "[FieldsOfStudy] Load FieldsOfStudys";
export const LOAD_FIELDS_OF_STUDY_FAIL =
  "[FieldsOfStudy] Load FieldsOfStudy Fail";
export const LOAD_FIELDS_OF_STUDY_SUCCESS =
  "[FieldsOfStudy] Load FieldsOfStudy Success";

export class LoadFieldsOfStudy implements Action {
  readonly type = LOAD_FIELDS_OF_STUDY;
}

export class LoadFieldsOfStudyFail implements Action {
  readonly type = LOAD_FIELDS_OF_STUDY_FAIL;
  constructor(public payload: any) {}
}

export class LoadFieldsOfStudySuccess implements Action {
  readonly type = LOAD_FIELDS_OF_STUDY_SUCCESS;
  constructor(public payload: any) {}
}

// action types
export type FieldsOfStudyAction =
  | LoadFieldsOfStudy
  | LoadFieldsOfStudyFail
  | LoadFieldsOfStudySuccess;
