import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as subjectActions from "../actions/subjects.action";
import * as fromServices from "../../services";

@Injectable()
export class SubjectsEffects {
  constructor(
    private actions$: Actions,
    private subjectService: fromServices.SubjectService
  ) {}

  //load subjects
  @Effect()
  loadSubjects$ = this.actions$.pipe(
    ofType(subjectActions.LOAD_SUBJECTS),
    switchMap(action => {
      return this.subjectService
        .getAllSubjects(action["payload"]["page"], action["payload"]["size"])
        .pipe(
          map(subjects => new subjectActions.LoadSubjectsSuccess(subjects)),
          catchError(error => of(new subjectActions.LoadSubjectsFail(error)))
        );
    })
  );

  //add subject
  @Effect()
  addSubject$ = this.actions$.pipe(
    ofType(subjectActions.ADD_SUBJECT),
    switchMap(action => {
      return this.subjectService.addSubject(action["payload"]).pipe(
        map(() => new subjectActions.AddSubjectSuccess(action["payload"])),
        catchError(error => of(new subjectActions.AddSubjectFail(error)))
      );
    })
  );

  //edit subject
  @Effect()
  editSubject$ = this.actions$.pipe(
    ofType(subjectActions.EDIT_SUBJECT),
    switchMap(action => {
      return this.subjectService.editSubject(action["payload"]).pipe(
        map(() => new subjectActions.EditSubjectSuccess(action["payload"])),
        catchError(error => of(new subjectActions.EditSubjectFail(error)))
      );
    })
  );

  //delete subject
  @Effect()
  deleteSubject$ = this.actions$.pipe(
    ofType(subjectActions.DELETE_SUBJECT),
    switchMap(action => {
      return this.subjectService.deleteSubject(action["payload"]).pipe(
        map(() => new subjectActions.DeleteSubjectSuccess(action["payload"])),
        catchError(error => of(new subjectActions.EditSubjectFail(error)))
      );
    })
  );

  //load student subjects
  @Effect()
  loadStudentSubjects$ = this.actions$.pipe(
    ofType(subjectActions.LOAD_STUDENT_SUBJECTS),
    switchMap(action => {
      return this.subjectService.getAllStudentSubjects(action["payload"]).pipe(
        map(
          subjects => new subjectActions.LoadStudentSubjectsSuccess(subjects)
        ),
        catchError(error =>
          of(new subjectActions.LoadStudentSubjectsFail(error))
        )
      );
    })
  );

  //load professor subjects
  @Effect()
  loadProfessorSubjects$ = this.actions$.pipe(
    ofType(subjectActions.LOAD_PROFESSOR_SUBJECTS),
    switchMap(action => {
      return this.subjectService
        .getAllProfessorSubjects(action["payload"])
        .pipe(
          map(
            subjects =>
              new subjectActions.LoadProfessorSubjectsSuccess(subjects)
          ),
          catchError(error =>
            of(new subjectActions.LoadProfessorSubjectsFail(error))
          )
        );
    })
  );
}
