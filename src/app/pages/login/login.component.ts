import { Component, OnInit } from "@angular/core";

import { Store } from "@ngrx/store";
import * as fromStore from "../../store";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginUser: any = {};
  badLogin: any = false;
  error$: Observable<any>;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {}

  login() {
    this.error$ = this.store.select(fromStore.getLoginError);
    if (this.loginUser.email == "" || this.loginUser.password == "") {
      this.badLogin = true;
    } else {
      this.store.dispatch(new fromStore.Login(this.loginUser));
    }
  }
}
