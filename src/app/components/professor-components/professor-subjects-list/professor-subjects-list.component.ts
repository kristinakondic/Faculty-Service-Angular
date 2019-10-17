import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Subject } from "src/app/models/subject.model";
import { User } from "src/app/models/user.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";

@Component({
  selector: "app-professor-subjects-list",
  templateUrl: "./professor-subjects-list.component.html",
  styleUrls: ["./professor-subjects-list.component.scss"]
})
export class ProfessorSubjectsListComponent implements OnInit {
  subjects$: Observable<Subject[]>;
  user$: Observable<User>;
  subscription: Subscription;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.subjects$ = this.store.select(fromStore.getAllProfessorSubjects);
    this.user$ = this.store.select(fromStore.getUser);
    this.subscription = this.user$.subscribe(u => {
      if (u.id) {
        this.store.dispatch(new fromStore.LoadProfessorSubjects(u.id));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
