import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "src/app/models/subject.model";

@Component({
  selector: "app-exam-registration",
  templateUrl: "./exam-registration.component.html",
  styleUrls: ["./exam-registration.component.scss"]
})
export class ExamRegistrationComponent implements OnInit {
  @Input() subjects$: Observable<Subject[]>;
  constructor() {}

  ngOnInit() {}

  registerExam(examId) {}
}
