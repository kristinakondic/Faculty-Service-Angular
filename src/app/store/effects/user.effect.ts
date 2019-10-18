import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as userAction from "../actions/user.action";
import * as fromServices from "../../services";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService,
    private studentService: fromServices.StudentService,
    private router: Router
  ) {}

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(userAction.LOAD_USER),
    switchMap(email => {
      return this.userService.getUser(email["payload"]).pipe(
        map(user => new userAction.LoadUserSuccess(user)),
        catchError(error => of(new userAction.LoadUserFail(error)))
      );
    })
  );

  //load student
  @Effect()
  loadStudent$ = this.actions$.pipe(
    ofType(userAction.LOAD_STUDENT),
    switchMap(action => {
      return this.studentService.getStudent(action["payload"]).pipe(
        map(student => new userAction.LoadStudentSuccess(student)),
        catchError(error => of(new userAction.LoadStudentFail(error)))
      );
    })
  );

  //change password
  @Effect()
  changePassword$ = this.actions$.pipe(
    ofType(userAction.CHANGE_PASSWORD),
    switchMap(action => {
      return this.userService.changePassword(action["payload"]).pipe(
        map(() => new userAction.ChangePasswordSuccess()),
        catchError(error => of(new userAction.ChangePasswordFail(error)))
      );
    })
  );
}
