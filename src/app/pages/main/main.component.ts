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
  subscription2: Subscription;
  userEmail$: Observable<string>;
  user$: Observable<any>;
  userRole$: Observable<string>;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.userRole$ = this.store.select(fromStore.getLoginRole);
    this.userEmail$ = this.store.select(fromStore.getLoginEmail);
    this.user$ = this.store.select(fromStore.getUser);
    this.subscription = this.userEmail$.subscribe(email => {
      this.store.dispatch(new fromStore.LoadUser(email));
    });

    this.subscription2 = this.user$.subscribe(user => {
      if (user && user.role == "STUDENT" && !user.student)
        this.store.dispatch(new fromStore.LoadStudent(user.email));
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }
}
