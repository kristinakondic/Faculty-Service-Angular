import { Action } from "@ngrx/store";

import { SubjectPageable } from "../../models/subject-pageable.model";
import { Subject } from "../../models/subject.model";

// load subjects
export const LOAD_SUBJECTS = "[Subjects] Load Subjects";
export const LOAD_SUBJECTS_FAIL = "[Subjects] Load Subjects Fail";
export const LOAD_SUBJECTS_SUCCESS = "[Subjects] Load Subjects Success";

export class LoadSubjects implements Action {
  readonly type = LOAD_SUBJECTS;
  constructor(public payload: any) {}
}

export class LoadSubjectsFail implements Action {
  readonly type = LOAD_SUBJECTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadSubjectsSuccess implements Action {
  readonly type = LOAD_SUBJECTS_SUCCESS;
  constructor(public payload: SubjectPageable) {}
}

// add subject
export const ADD_SUBJECT = "[Subject] Add Subject";
export const ADD_SUBJECT_FAIL = "[Subject] Add Subject Fail";
export const ADD_SUBJECT_SUCCESS = "[Subject] Add Subject Success";

export class AddSubject implements Action {
  readonly type = ADD_SUBJECT;
  constructor(public payload: any) {}
}

export class AddSubjectFail implements Action {
  readonly type = ADD_SUBJECT_FAIL;
  constructor(public payload: any) {}
}

export class AddSubjectSuccess implements Action {
  readonly type = ADD_SUBJECT_SUCCESS;
  constructor(public payload: Subject) {}
}

// edit subject
export const EDIT_SUBJECT = "[Subject] Edit Subject";
export const EDIT_SUBJECT_FAIL = "[Subject] Edit Subject Fail";
export const EDIT_SUBJECT_SUCCESS = "[Subject] Edit Subject Success";

export class EditSubject implements Action {
  readonly type = EDIT_SUBJECT;
  constructor(public payload: any) {}
}

export class EditSubjectFail implements Action {
  readonly type = EDIT_SUBJECT_FAIL;
  constructor(public payload: any) {}
}

export class EditSubjectSuccess implements Action {
  readonly type = EDIT_SUBJECT_SUCCESS;
  constructor(public payload: Subject) {}
}

// delete subject
export const DELETE_SUBJECT = "[Subject] Delete Subject";
export const DELETE_SUBJECT_FAIL = "[Subject] Delete Subject Fail";
export const DELETE_SUBJECT_SUCCESS = "[Subject] Delete Subject Success";

export class DeleteSubject implements Action {
  readonly type = DELETE_SUBJECT;
  constructor(public payload: any) {}
}

export class DeleteSubjectFail implements Action {
  readonly type = DELETE_SUBJECT_FAIL;
  constructor(public payload: any) {}
}

export class DeleteSubjectSuccess implements Action {
  readonly type = DELETE_SUBJECT_SUCCESS;
  constructor(public payload: Subject) {}
}

// load student subjects
export const LOAD_STUDENT_SUBJECTS = "[Subjects] Load Student Subjects";
export const LOAD_STUDENT_SUBJECTS_FAIL =
  "[Subjects] Load Student Subjects Fail";
export const LOAD_STUDENT_SUBJECTS_SUCCESS =
  "[Subjects] Load Student Subjects Success";

export class LoadStudentSubjects implements Action {
  readonly type = LOAD_STUDENT_SUBJECTS;
  constructor(public payload: any) {}
}

export class LoadStudentSubjectsFail implements Action {
  readonly type = LOAD_STUDENT_SUBJECTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadStudentSubjectsSuccess implements Action {
  readonly type = LOAD_STUDENT_SUBJECTS_SUCCESS;
  constructor(public payload: Subject[]) {}
}

// load professor subjects
export const LOAD_PROFESSOR_SUBJECTS = "[Subjects] Load Professor Subjects";
export const LOAD_PROFESSOR_SUBJECTS_FAIL =
  "[Subjects] Load Professor Subjects Fail";
export const LOAD_PROFESSOR_SUBJECTS_SUCCESS =
  "[Subjects] Load Professor Subjects Success";

export class LoadProfessorSubjects implements Action {
  readonly type = LOAD_PROFESSOR_SUBJECTS;
  constructor(public payload: any) {}
}

export class LoadProfessorSubjectsFail implements Action {
  readonly type = LOAD_PROFESSOR_SUBJECTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProfessorSubjectsSuccess implements Action {
  readonly type = LOAD_PROFESSOR_SUBJECTS_SUCCESS;
  constructor(public payload: Subject[]) {}
}

// load professor subjects
export const REGISTER_EXAM_FOR_SUBJECT = "[Subjects] Register Exam For Subject";
export const REGISTER_EXAM_FOR_SUBJECT_FAIL =
  "[Subjects] Register Exam For Subject Fail";
export const REGISTER_EXAM_FOR_SUBJECT_SUCCESS =
  "[Subjects] Register Exam For Subject Success";

export class RegisterExamForSubject implements Action {
  readonly type = REGISTER_EXAM_FOR_SUBJECT;
  constructor(public payload: any) {}
}

export class RegisterExamForSubjectFail implements Action {
  readonly type = REGISTER_EXAM_FOR_SUBJECT_FAIL;
  constructor(public payload: any) {}
}

export class RegisterExamForSubjectSuccess implements Action {
  readonly type = REGISTER_EXAM_FOR_SUBJECT_SUCCESS;
  constructor(public payload: any) {}
}

// action types
export type SubjectsAction =
  | LoadSubjects
  | LoadSubjectsFail
  | LoadSubjectsSuccess
  | AddSubject
  | AddSubjectFail
  | AddSubjectSuccess
  | EditSubject
  | EditSubjectFail
  | EditSubjectSuccess
  | DeleteSubject
  | DeleteSubjectFail
  | DeleteSubjectSuccess;

export type SubjectListAction =
  | LoadStudentSubjects
  | LoadStudentSubjectsFail
  | LoadStudentSubjectsSuccess
  | LoadProfessorSubjects
  | LoadProfessorSubjectsFail
  | LoadProfessorSubjectsSuccess
  | RegisterExamForSubject
  | RegisterExamForSubjectFail
  | RegisterExamForSubjectSuccess;
