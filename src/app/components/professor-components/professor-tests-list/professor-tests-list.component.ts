import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Exam } from "src/app/models/exam.model";
import { User } from "src/app/models/user.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";

@Component({
  selector: "app-professor-tests-list",
  templateUrl: "./professor-tests-list.component.html",
  styleUrls: ["./professor-tests-list.component.scss"]
})
export class ProfessorTestsListComponent implements OnInit {
  exams$: Observable<Exam[]>;
  user$: Observable<User>;
  subscription: Subscription;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.exams$ = this.store.select(fromStore.getAllProfessorTests);
    this.user$ = this.store.select(fromStore.getUser);
    this.subscription = this.user$.subscribe(u => {
      if (u.id) {
        this.store.dispatch(new fromStore.LoadProfessorTests(u.id));
      }
    });
  }
}
