import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as examPeriodsActions from "../actions/exam-periods.action";
import * as fromServices from "../../services";

@Injectable()
export class ExamPeriodsEffects {
  constructor(
    private actions$: Actions,
    private examPeriodService: fromServices.ExamPeriodService
  ) {}
  //load examPeriods
  @Effect()
  loadExamPeriods$ = this.actions$.pipe(
    ofType(examPeriodsActions.LOAD_EXAM_PERIODS),
    switchMap(action => {
      return this.examPeriodService.getAll().pipe(
        map(
          examPeriod =>
            new examPeriodsActions.LoadExamPeriodsSuccess(examPeriod)
        ),
        catchError(error =>
          of(new examPeriodsActions.LoadExamPeriodsFail(error))
        )
      );
    })
  );
}
