import { Component, OnInit } from "@angular/core";
import { Subject } from "src/app/models/subject.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";
import { ExamParticipation } from "src/app/models/exam-participation.model";

@Component({
  selector: "app-exam-results",
  templateUrl: "./exam-results.component.html",
  styleUrls: ["./exam-results.component.scss"]
})
export class ExamResultsComponent implements OnInit {
  subjects$: Observable<Subject[]>;
  examParticipations$: Observable<ExamParticipation[]>;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.subjects$ = this.store.select(fromStore.getAllStudentSubjects);
  }

  results(examId) {
    this.store.dispatch(new fromStore.LoadExamParticipations(examId));
    this.examParticipations$ = this.store.select(
      fromStore.getExamParticipations
    );
    this.examParticipations$.subscribe(e => console.log(e));
  }
}
