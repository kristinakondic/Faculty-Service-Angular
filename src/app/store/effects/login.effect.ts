import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as loginAction from "../actions/login.action";
import * as fromServices from "../../services";
import { Router } from "@angular/router";

@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions,
    private loginService: fromServices.LoginService,
    private router: Router
  ) {}

  @Effect()
  login$ = this.actions$.pipe(
    ofType(loginAction.LOGIN),
    switchMap(action => {
      return this.loginService.login(action["payload"]).pipe(
        map(login => {
          if (login) {
            localStorage.setItem("loginInfo", JSON.stringify(login));
            this.router.navigate(["/"]);
            return new loginAction.LoginSuccess(login);
          } else {
            return new loginAction.LoginFail("Token is null");
          }
        }),
        catchError(error => of(new loginAction.LoginFail(error)))
      );
    })
  );
}
