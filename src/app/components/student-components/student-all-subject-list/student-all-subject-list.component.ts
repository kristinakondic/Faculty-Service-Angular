import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";
import { Subject } from "src/app/models/subject.model";

@Component({
  selector: "app-student-all-subject-list",
  templateUrl: "./student-all-subject-list.component.html",
  styleUrls: ["./student-all-subject-list.component.scss"]
})
export class StudentAllSubjectListComponent implements OnInit {
  @Input() subjects$: Observable<Subject[]>;
  constructor() {}

  ngOnInit() {}
}
