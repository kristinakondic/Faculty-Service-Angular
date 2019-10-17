import { Action } from "@ngrx/store";

import { StudentPageable } from "src/app/models/student-pageable.model";
import { Student } from "src/app/models/student.model";

// load students
export const LOAD_STUDENTS = "[Students] Load Students";
export const LOAD_STUDENTS_FAIL = "[Students] Load Students Fail";
export const LOAD_STUDENTS_SUCCESS = "[Students] Load Students Success";

export class LoadStudents implements Action {
  readonly type = LOAD_STUDENTS;
  constructor(public payload: any) {}
}

export class LoadStudentsFail implements Action {
  readonly type = LOAD_STUDENTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadStudentsSuccess implements Action {
  readonly type = LOAD_STUDENTS_SUCCESS;
  constructor(public payload: StudentPageable) {}
}

// add student
export const ADD_STUDENT = "[Student] Add Student";
export const ADD_STUDENT_FAIL = "[Student] Add Student Fail";
export const ADD_STUDENT_SUCCESS = "[Student] Add Student Success";

export class AddStudent implements Action {
  readonly type = ADD_STUDENT;
  constructor(public payload: any) {}
}

export class AddStudentFail implements Action {
  readonly type = ADD_STUDENT_FAIL;
  constructor(public payload: any) {}
}

export class AddStudentSuccess implements Action {
  readonly type = ADD_STUDENT_SUCCESS;
  constructor(public payload: Student) {}
}

// edit student
export const EDIT_STUDENT = "[Student] Edit Student";
export const EDIT_STUDENT_FAIL = "[Student] Edit Student Fail";
export const EDIT_STUDENT_SUCCESS = "[Student] Edit Student Success";

export class EditStudent implements Action {
  readonly type = EDIT_STUDENT;
  constructor(public payload: any) {}
}

export class EditStudentFail implements Action {
  readonly type = EDIT_STUDENT_FAIL;
  constructor(public payload: any) {}
}

export class EditStudentSuccess implements Action {
  readonly type = EDIT_STUDENT_SUCCESS;
  constructor(public payload: Student) {}
}

// delete student
export const DELETE_STUDENT = "[Student] Delete Student";
export const DELETE_STUDENT_FAIL = "[Student] Delete Student Fail";
export const DELETE_STUDENT_SUCCESS = "[Student] Delete Student Success";

export class DeleteStudent implements Action {
  readonly type = DELETE_STUDENT;
  constructor(public payload: any) {}
}

export class DeleteStudentFail implements Action {
  readonly type = DELETE_STUDENT_FAIL;
  constructor(public payload: any) {}
}

export class DeleteStudentSuccess implements Action {
  readonly type = DELETE_STUDENT_SUCCESS;
  constructor(public payload: Student) {}
}

// action types
export type StudentsAction =
  | LoadStudents
  | LoadStudentsFail
  | LoadStudentsSuccess
  | AddStudent
  | AddStudentFail
  | AddStudentSuccess
  | EditStudent
  | EditStudentFail
  | EditStudentSuccess
  | DeleteStudent
  | DeleteStudentFail
  | DeleteStudentSuccess;
