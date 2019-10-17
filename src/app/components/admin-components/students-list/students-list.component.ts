import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";
import { Observable } from "rxjs";
import { ModalDirective } from "ngx-bootstrap";
import { Student } from "src/app/models/student.model";
import { StudentPageable } from "src/app/models/student-pageable.model";

@Component({
  selector: "app-students-list",
  templateUrl: "./students-list.component.html",
  styleUrls: ["./students-list.component.scss"]
})
export class StudentListComponent implements OnInit {
  students$: Observable<Student[]>;
  student$: Observable<Student>;
  studentPageable$: Observable<StudentPageable>;
  newStudent = new Student();
  studentExists = null;
  selectedStudentIdToDelete = null;

  constructor(private store: Store<fromStore.AppState>) {}

  @ViewChild("closeModalBtn") public closeModalBtn: ModalDirective;
  @ViewChild("openModalBtn") public openModalBtn: ModalDirective;
  @ViewChild("closeDeleteModalBtn") public closeDeleteModalBtn: ModalDirective;

  ngOnInit() {
    this.students$ = this.store.select(fromStore.getStudents);

    this.studentPageable$ = this.store.select(fromStore.getStudentsPageable);
    this.getStudentsPage(0, 6);
  }

  getStudentsPage(page: number, size: number) {
    this.store.dispatch(new fromStore.LoadStudents({ page, size }));
  }

  pageChanged(event: any): void {
    this.getStudentsPage(event.page - 1, event.itemsPerPage);
  }

  addStudent() {
    this.studentExists
      ? this.store.dispatch(new fromStore.EditStudent(this.newStudent))
      : this.store.dispatch(new fromStore.AddStudent(this.newStudent));
    this.closeModalBtn["nativeElement"].click();
    this.newStudent = new Student();
  }

  setStudentExists(status) {
    this.studentExists = status;
    this.newStudent = new Student();
  }

  editStudent(id) {
    this.openModalBtn["nativeElement"].click();
    this.student$ = this.store.select(fromStore.getStudent, id);
    this.student$.subscribe(p => {
      this.newStudent = p;
    });
    this.studentExists = true;
  }

  getSelectedStudent(id) {
    this.selectedStudentIdToDelete = id;
  }

  deleteStudent() {
    this.store.dispatch(
      new fromStore.DeleteStudent(this.selectedStudentIdToDelete)
    );
    this.closeDeleteModalBtn["nativeElement"].click();
  }
}
