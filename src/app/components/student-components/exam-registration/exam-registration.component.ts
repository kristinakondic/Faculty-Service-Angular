import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Subject } from "src/app/models/subject.model";
import { User } from "src/app/models/user.model";
import * as fromStore from "../../../store";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-exam-registration",
  templateUrl: "./exam-registration.component.html",
  styleUrls: ["./exam-registration.component.scss"]
})
export class ExamRegistrationComponent implements OnInit {
  @Input() subjects$: Observable<Subject[]>;
  @Input() user$: Observable<User>;
  subscription: Subscription;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {}

  registerExam(exam) {
    this.store.dispatch(new fromStore.ChangeAccountStatus());
    this.subscription = this.user$.subscribe(user => {
      this.store.dispatch(
        new fromStore.RegisterExamForSubject({
          student: { id: user.id },
          exam: { id: exam.id }
        })
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
