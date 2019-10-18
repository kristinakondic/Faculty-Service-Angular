import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as studentActions from "../actions/students.action";
import * as fromServices from "../../services";

@Injectable()
export class StudentsEffects {
  constructor(
    private actions$: Actions,
    private studentService: fromServices.StudentService
  ) {}
  //load students
  @Effect()
  loadStudents$ = this.actions$.pipe(
    ofType(studentActions.LOAD_STUDENTS),
    switchMap(action => {
      return this.studentService
        .getAllStudents(action["payload"]["page"], action["payload"]["size"])
        .pipe(
          map(students => new studentActions.LoadStudentsSuccess(students)),
          catchError(error => of(new studentActions.LoadStudentsFail(error)))
        );
    })
  );

  //add student
  @Effect()
  addStudent$ = this.actions$.pipe(
    ofType(studentActions.ADD_STUDENT),
    switchMap(action => {
      return this.studentService.addStudent(action["payload"]).pipe(
        map(() => new studentActions.AddStudentSuccess(action["payload"])),
        catchError(error => of(new studentActions.AddStudentFail(error)))
      );
    })
  );

  //edit student
  @Effect()
  editStudent$ = this.actions$.pipe(
    ofType(studentActions.EDIT_STUDENT),
    switchMap(action => {
      return this.studentService.editStudent(action["payload"]).pipe(
        map(() => new studentActions.EditStudentSuccess(action["payload"])),
        catchError(error => of(new studentActions.EditStudentFail(error)))
      );
    })
  );

  //delete student
  @Effect()
  deleteStudent$ = this.actions$.pipe(
    ofType(studentActions.DELETE_STUDENT),
    switchMap(action => {
      return this.studentService.deleteStudent(action["payload"]).pipe(
        map(() => new studentActions.DeleteStudentSuccess(action["payload"])),
        catchError(error => of(new studentActions.EditStudentFail(error)))
      );
    })
  );
}
