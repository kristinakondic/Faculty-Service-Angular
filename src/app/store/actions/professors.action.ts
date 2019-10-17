import { Action } from "@ngrx/store";

import { ProfessorPageable } from "src/app/models/professor-pageable.model";
import { Professor } from "src/app/models/professor.model";

// load professors
export const LOAD_PROFESSORS = "[Professors] Load Professors";
export const LOAD_PROFESSORS_FAIL = "[Professors] Load Professors Fail";
export const LOAD_PROFESSORS_SUCCESS = "[Professors] Load Professors Success";

export class LoadProfessors implements Action {
  readonly type = LOAD_PROFESSORS;
  constructor(public payload: any) {}
}

export class LoadProfessorsFail implements Action {
  readonly type = LOAD_PROFESSORS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProfessorsSuccess implements Action {
  readonly type = LOAD_PROFESSORS_SUCCESS;
  constructor(public payload: ProfessorPageable) {}
}

// add professor
export const ADD_PROFESSOR = "[Professor] Add Professor";
export const ADD_PROFESSOR_FAIL = "[Professor] Add Professor Fail";
export const ADD_PROFESSOR_SUCCESS = "[Professor] Add Professor Success";

export class AddProfessor implements Action {
  readonly type = ADD_PROFESSOR;
  constructor(public payload: any) {}
}

export class AddProfessorFail implements Action {
  readonly type = ADD_PROFESSOR_FAIL;
  constructor(public payload: any) {}
}

export class AddProfessorSuccess implements Action {
  readonly type = ADD_PROFESSOR_SUCCESS;
  constructor(public payload: Professor) {}
}

// edit professor
export const EDIT_PROFESSOR = "[Professor] Edit Professor";
export const EDIT_PROFESSOR_FAIL = "[Professor] Edit Professor Fail";
export const EDIT_PROFESSOR_SUCCESS = "[Professor] Edit Professor Success";

export class EditProfessor implements Action {
  readonly type = EDIT_PROFESSOR;
  constructor(public payload: any) {}
}

export class EditProfessorFail implements Action {
  readonly type = EDIT_PROFESSOR_FAIL;
  constructor(public payload: any) {}
}

export class EditProfessorSuccess implements Action {
  readonly type = EDIT_PROFESSOR_SUCCESS;
  constructor(public payload: Professor) {}
}

// delete professor
export const DELETE_PROFESSOR = "[Professor] Delete Professor";
export const DELETE_PROFESSOR_FAIL = "[Professor] Delete Professor Fail";
export const DELETE_PROFESSOR_SUCCESS = "[Professor] Delete Professor Success";

export class DeleteProfessor implements Action {
  readonly type = DELETE_PROFESSOR;
  constructor(public payload: any) {}
}

export class DeleteProfessorFail implements Action {
  readonly type = DELETE_PROFESSOR_FAIL;
  constructor(public payload: any) {}
}

export class DeleteProfessorSuccess implements Action {
  readonly type = DELETE_PROFESSOR_SUCCESS;
  constructor(public payload: Professor) {}
}

// action types
export type ProfessorsAction =
  | LoadProfessors
  | LoadProfessorsFail
  | LoadProfessorsSuccess
  | AddProfessor
  | AddProfessorFail
  | AddProfessorSuccess
  | EditProfessor
  | EditProfessorFail
  | EditProfessorSuccess
  | DeleteProfessor
  | DeleteProfessorFail
  | DeleteProfessorSuccess;
