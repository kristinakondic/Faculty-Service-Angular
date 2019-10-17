import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { LoginInfo } from "../models/login-info.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../store";

@Injectable({
  providedIn: "root"
})
export class LoggedOutGuard implements CanActivate {
  login$: Observable<LoginInfo>;
  loginInfo: any;
  constructor(
    private router: Router,
    private store: Store<fromStore.AppState>
  ) {}

  canActivate() {
    this.loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    if (this.loginInfo) {
      this.store.dispatch(new fromStore.LoginSuccess(this.loginInfo));
      return true;
    }

    this.router.navigate(["/login"]);
    return false;
  }
}
