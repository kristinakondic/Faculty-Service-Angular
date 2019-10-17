import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "src/app/models/subject.model";

@Component({
  selector: "app-student-unpassed-subject-list",
  templateUrl: "./student-unpassed-subject-list.component.html",
  styleUrls: ["./student-unpassed-subject-list.component.scss"]
})
export class StudentUnpassedSubjectListComponent implements OnInit {
  @Input() subjects$: Observable<Subject[]>;

  constructor() {}

  ngOnInit() {}
}
