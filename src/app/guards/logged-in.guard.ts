import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { Observable } from "rxjs";
import { LoginInfo } from "../models/login-info.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../store";

@Injectable({
  providedIn: "root"
})
export class LoggedInGuard implements CanActivate {
  login$: Observable<LoginInfo>;
  loginInfo: any;
  constructor(private router: Router) {}

  canActivate() {
    this.loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
    if (this.loginInfo) {
      this.router.navigate(["/"]);
      return false;
    }
    return true;
  }
}
