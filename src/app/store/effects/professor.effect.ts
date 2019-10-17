import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as professorActions from "../actions/professors.action";
import * as fromServices from "../../services";

@Injectable()
export class ProfessorsEffects {
  constructor(
    private actions$: Actions,
    private professorService: fromServices.ProfessorService
  ) {}
  //load professors
  @Effect()
  loadProfessors$ = this.actions$.pipe(
    ofType(professorActions.LOAD_PROFESSORS),
    switchMap(action => {
      return this.professorService
        .getAllProfessors(action["payload"]["page"], action["payload"]["size"])
        .pipe(
          map(
            professors => new professorActions.LoadProfessorsSuccess(professors)
          ),
          catchError(error =>
            of(new professorActions.LoadProfessorsFail(error))
          )
        );
    })
  );
  //add professor
  @Effect()
  addProfessor$ = this.actions$.pipe(
    ofType(professorActions.ADD_PROFESSOR),
    switchMap(action => {
      return this.professorService.addProfessor(action["payload"]).pipe(
        map(() => new professorActions.AddProfessorSuccess(action["payload"])),
        catchError(error => of(new professorActions.AddProfessorFail(error)))
      );
    })
  );

  //edit professor
  @Effect()
  editProfessor$ = this.actions$.pipe(
    ofType(professorActions.EDIT_PROFESSOR),
    switchMap(action => {
      return this.professorService.editProfessor(action["payload"]).pipe(
        map(() => new professorActions.EditProfessorSuccess(action["payload"])),
        catchError(error => of(new professorActions.EditProfessorFail(error)))
      );
    })
  );

  //delete professor
  @Effect()
  deleteProfessor$ = this.actions$.pipe(
    ofType(professorActions.DELETE_PROFESSOR),
    switchMap(action => {
      return this.professorService.deleteProfessor(action["payload"]).pipe(
        map(
          () => new professorActions.DeleteProfessorSuccess(action["payload"])
        ),
        catchError(error => of(new professorActions.EditProfessorFail(error)))
      );
    })
  );
}
