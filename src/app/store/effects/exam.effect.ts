import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as examActions from "../actions/exams.action";
import * as fromServices from "../../services";

@Injectable()
export class ExamsEffects {
  constructor(
    private actions$: Actions,
    private examService: fromServices.ExamService
  ) {}
  //load exams
  @Effect()
  loadExams$ = this.actions$.pipe(
    ofType(examActions.LOAD_EXAMS),
    switchMap(action => {
      return this.examService
        .getAllExams(action["payload"]["page"], action["payload"]["size"])
        .pipe(
          map(exams => new examActions.LoadExamsSuccess(exams)),
          catchError(error => of(new examActions.LoadExamsFail(error)))
        );
    })
  );
  //add exam
  @Effect()
  addExam$ = this.actions$.pipe(
    ofType(examActions.ADD_EXAM),
    switchMap(action => {
      return this.examService.addExam(action["payload"]).pipe(
        map(() => new examActions.AddExamSuccess(action["payload"])),
        catchError(error => of(new examActions.AddExamFail(error)))
      );
    })
  );

  //edit exam
  @Effect()
  editExam$ = this.actions$.pipe(
    ofType(examActions.EDIT_EXAM),
    switchMap(action => {
      return this.examService.editExam(action["payload"]).pipe(
        map(() => new examActions.EditExamSuccess(action["payload"])),
        catchError(error => of(new examActions.EditExamFail(error)))
      );
    })
  );

  //delete exam
  @Effect()
  deleteExam$ = this.actions$.pipe(
    ofType(examActions.DELETE_EXAM),
    switchMap(action => {
      return this.examService.deleteExam(action["payload"]).pipe(
        map(() => new examActions.DeleteExamSuccess(action["payload"])),
        catchError(error => of(new examActions.EditExamFail(error)))
      );
    })
  );

  //load professor exams
  @Effect()
  loadProfessorExams$ = this.actions$.pipe(
    ofType(examActions.LOAD_PROFESSOR_EXAMS),
    switchMap(action => {
      return this.examService.getAllProfessorExams(action["payload"]).pipe(
        map(exams => new examActions.LoadProfessorExamsSuccess(exams)),
        catchError(error => of(new examActions.LoadProfessorExamsFail(error)))
      );
    })
  );

  //load professor tests
  @Effect()
  loadProfessorTests$ = this.actions$.pipe(
    ofType(examActions.LOAD_PROFESSOR_TESTS),
    switchMap(action => {
      return this.examService.getAllProfessorTests(action["payload"]).pipe(
        map(exams => new examActions.LoadProfessorTestsSuccess(exams)),
        catchError(error => of(new examActions.LoadProfessorTestsFail(error)))
      );
    })
  );
}
