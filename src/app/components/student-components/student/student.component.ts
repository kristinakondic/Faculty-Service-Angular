import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Subject } from "src/app/models/subject.model";
import { User } from "src/app/models/user.model";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"]
})
export class StudentComponent implements OnInit {
  subjects$: Observable<Subject[]>;
  @Input() user$: Observable<User>;
  subscription: Subscription;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.subjects$ = this.store.select(fromStore.getAllStudentSubjects);
    this.subscription = this.user$.subscribe(u => {
      if (u.id) {
        this.store.dispatch(new fromStore.LoadStudentSubjects(u.id));
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
