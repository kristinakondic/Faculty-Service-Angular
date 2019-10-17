import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as examParticipationsActions from "../actions/exam-participation.action";
import * as fromServices from "../../services";

@Injectable()
export class ExamParticipationsEffects {
  constructor(
    private actions$: Actions,
    private examParticipationService: fromServices.ExamParticipationService
  ) {}
  //load examParticipations
  @Effect()
  loadExamParticipations$ = this.actions$.pipe(
    ofType(examParticipationsActions.LOAD_EXAM_PARTICIPATIONS),
    switchMap(action => {
      return this.examParticipationService
        .getExamParticipations(action["payload"])
        .pipe(
          map(
            examParticipation =>
              new examParticipationsActions.LoadExamParticipationsSuccess(
                examParticipation
              )
          ),
          catchError(error =>
            of(new examParticipationsActions.LoadExamParticipationsFail(error))
          )
        );
    })
  );
}
