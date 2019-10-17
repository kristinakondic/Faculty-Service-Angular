import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as fieldsOfStudyActions from "../actions/fields-of-study.action";
import * as fromServices from "../../services";

@Injectable()
export class FieldsOfStudysEffects {
  constructor(
    private actions$: Actions,
    private fieldsOfStudyService: fromServices.FieldsOfStudyService
  ) {}
  //load fieldsOfStudys
  @Effect()
  loadFieldsOfStudy$ = this.actions$.pipe(
    ofType(fieldsOfStudyActions.LOAD_FIELDS_OF_STUDY),
    switchMap(action => {
      return this.fieldsOfStudyService.getAll().pipe(
        map(
          fieldsOfStudy =>
            new fieldsOfStudyActions.LoadFieldsOfStudySuccess(fieldsOfStudy)
        ),
        catchError(error =>
          of(new fieldsOfStudyActions.LoadFieldsOfStudyFail(error))
        )
      );
    })
  );
}
