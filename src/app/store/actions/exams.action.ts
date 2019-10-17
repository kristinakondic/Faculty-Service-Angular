import { Action } from "@ngrx/store";

import { ExamPageable } from "src/app/models/exam-pageable.model";
import { Exam } from "src/app/models/exam.model";

// load exams
export const LOAD_EXAMS = "[Exams] Load Exams";
export const LOAD_EXAMS_FAIL = "[Exams] Load Exams Fail";
export const LOAD_EXAMS_SUCCESS = "[Exams] Load Exams Success";

export class LoadExams implements Action {
  readonly type = LOAD_EXAMS;
  constructor(public payload: any) {}
}

export class LoadExamsFail implements Action {
  readonly type = LOAD_EXAMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadExamsSuccess implements Action {
  readonly type = LOAD_EXAMS_SUCCESS;
  constructor(public payload: ExamPageable) {}
}

// add exam
export const ADD_EXAM = "[Exam] Add Exam";
export const ADD_EXAM_FAIL = "[Exam] Add Exam Fail";
export const ADD_EXAM_SUCCESS = "[Exam] Add Exam Success";

export class AddExam implements Action {
  readonly type = ADD_EXAM;
  constructor(public payload: any) {}
}

export class AddExamFail implements Action {
  readonly type = ADD_EXAM_FAIL;
  constructor(public payload: any) {}
}

export class AddExamSuccess implements Action {
  readonly type = ADD_EXAM_SUCCESS;
  constructor(public payload: Exam) {}
}

// edit exam
export const EDIT_EXAM = "[Exam] Edit Exam";
export const EDIT_EXAM_FAIL = "[Exam] Edit Exam Fail";
export const EDIT_EXAM_SUCCESS = "[Exam] Edit Exam Success";

export class EditExam implements Action {
  readonly type = EDIT_EXAM;
  constructor(public payload: any) {}
}

export class EditExamFail implements Action {
  readonly type = EDIT_EXAM_FAIL;
  constructor(public payload: any) {}
}

export class EditExamSuccess implements Action {
  readonly type = EDIT_EXAM_SUCCESS;
  constructor(public payload: Exam) {}
}

// delete exam
export const DELETE_EXAM = "[Exam] Delete Exam";
export const DELETE_EXAM_FAIL = "[Exam] Delete Exam Fail";
export const DELETE_EXAM_SUCCESS = "[Exam] Delete Exam Success";

export class DeleteExam implements Action {
  readonly type = DELETE_EXAM;
  constructor(public payload: any) {}
}

export class DeleteExamFail implements Action {
  readonly type = DELETE_EXAM_FAIL;
  constructor(public payload: any) {}
}

export class DeleteExamSuccess implements Action {
  readonly type = DELETE_EXAM_SUCCESS;
  constructor(public payload: Exam) {}
}

// load professor exams
export const LOAD_PROFESSOR_EXAMS = "[Exams] Load Professor Exams";
export const LOAD_PROFESSOR_EXAMS_FAIL = "[Exams] Load Professor Exams Fail";
export const LOAD_PROFESSOR_EXAMS_SUCCESS =
  "[Exams] Load Professor Exams Success";

export class LoadProfessorExams implements Action {
  readonly type = LOAD_PROFESSOR_EXAMS;
  constructor(public payload: any) {}
}

export class LoadProfessorExamsFail implements Action {
  readonly type = LOAD_PROFESSOR_EXAMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProfessorExamsSuccess implements Action {
  readonly type = LOAD_PROFESSOR_EXAMS_SUCCESS;
  constructor(public payload: Exam[]) {}
}

// load professor exams
export const LOAD_PROFESSOR_TESTS = "[Exam] Load Professor Tests";
export const LOAD_PROFESSOR_TESTS_FAIL = "[Exam] Load Professor Tests Fail";
export const LOAD_PROFESSOR_TESTS_SUCCESS =
  "[Exam] Load Professor Tests Success";

export class LoadProfessorTests implements Action {
  readonly type = LOAD_PROFESSOR_TESTS;
  constructor(public payload: any) {}
}

export class LoadProfessorTestsFail implements Action {
  readonly type = LOAD_PROFESSOR_TESTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProfessorTestsSuccess implements Action {
  readonly type = LOAD_PROFESSOR_TESTS_SUCCESS;
  constructor(public payload: Exam[]) {}
}

// action types
export type ExamsAction =
  | LoadExams
  | LoadExamsFail
  | LoadExamsSuccess
  | AddExam
  | AddExamFail
  | AddExamSuccess
  | EditExam
  | EditExamFail
  | EditExamSuccess
  | DeleteExam
  | DeleteExamFail
  | DeleteExamSuccess;

export type ExamListAction =
  | LoadProfessorExams
  | LoadProfessorExamsFail
  | LoadProfessorExamsSuccess
  | LoadProfessorTests
  | LoadProfessorTestsFail
  | LoadProfessorTestsSuccess;
