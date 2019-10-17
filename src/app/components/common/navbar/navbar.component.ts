import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";
import { Observable } from "rxjs";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store<fromStore.AppState>
  ) {}
  loginStatus$: Observable<boolean>;
  ngOnInit() {
    this.loginStatus$ = this.store.select(fromStore.getLoginStatus);
  }

  logout() {
    localStorage.clear();
    this.store.dispatch(new fromStore.Logout());
    //this.router.navigate(["login"]);
    window.location.reload(); // - reloading page instead of navigating - in order to reset ngrx store
  }
}
