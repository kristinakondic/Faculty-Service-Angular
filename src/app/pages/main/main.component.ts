import { Component, OnInit } from "@angular/core";
import * as fromStore from "../../store";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  subscription: Subscription;
  userEmail$: Observable<string>;
  user$: Observable<any>;
  userRole$: Observable<string>;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.userRole$ = this.store.select(fromStore.getLoginRole);
    this.userEmail$ = this.store.select(fromStore.getLoginEmail);
    this.subscription = this.userEmail$.subscribe(email => {
      this.store.dispatch(new fromStore.LoadUser(email));
    });
    this.user$ = this.store.select(fromStore.getUser);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
