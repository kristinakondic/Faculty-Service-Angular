import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Exam } from "src/app/models/exam.model";
import { User } from "src/app/models/user.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";

@Component({
  selector: "app-professor-exams-list",
  templateUrl: "./professor-exams-list.component.html",
  styleUrls: ["./professor-exams-list.component.scss"]
})
export class ProfessorExamsListComponent implements OnInit {
  exams$: Observable<Exam[]>;
  user$: Observable<User>;
  subscription: Subscription;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.exams$ = this.store.select(fromStore.getAllProfessorExams);
    this.user$ = this.store.select(fromStore.getUser);
    this.subscription = this.user$.subscribe(u => {
      if (u.id) {
        this.store.dispatch(new fromStore.LoadProfessorExams(u.id));
      }
    });
  }
}
