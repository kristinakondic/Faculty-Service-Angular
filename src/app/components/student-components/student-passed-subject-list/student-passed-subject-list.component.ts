import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Subject } from "src/app/models/subject.model";

@Component({
  selector: "app-student-passed-subject-list",
  templateUrl: "./student-passed-subject-list.component.html",
  styleUrls: ["./student-passed-subject-list.component.scss"]
})
export class StudentPassedSubjectListComponent implements OnInit {
  @Input() subjects$: Observable<Subject[]>;

  constructor() {}

  ngOnInit() {}
}
