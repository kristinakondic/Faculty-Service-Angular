import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";
import { Observable } from "rxjs";
import { ModalDirective } from "ngx-bootstrap";
import { Subject } from "src/app/models/subject.model";
import { SubjectPageable } from "../../../models/subject-pageable.model";
import { FieldsOfStudy } from "src/app/models/fieldsOfStudy.model";

@Component({
  selector: "app-subjects-list",
  templateUrl: "./subjects-list.component.html",
  styleUrls: ["./subjects-list.component.scss"]
})
export class SubjectsListComponent implements OnInit {
  subjects$: Observable<Subject[]>;
  subject$: Observable<Subject>;
  subjectPageable$: Observable<SubjectPageable>;
  newSubject = new Subject();
  subjectExists = null;
  selectedSubjectIdToDelete = null;
  fieldsOfStudy$: Observable<FieldsOfStudy[]>;
  errorMsg = "";

  constructor(private store: Store<fromStore.AppState>) {}

  @ViewChild("closeModalBtn") public closeModalBtn: ModalDirective;
  @ViewChild("openModalBtn") public openModalBtn: ModalDirective;
  @ViewChild("closeDeleteModalBtn") public closeDeleteModalBtn: ModalDirective;
  @ViewChild("selectFieldsOfStudy") selectFieldsOfStudy = {
    nativeElement: { value: null }
  };
  ngOnInit() {
    this.subjects$ = this.store.select(fromStore.getSubjects);

    this.subjectPageable$ = this.store.select(fromStore.getSubjectsPageable);
    this.getSubjectsPage(0, 6);

    this.store.dispatch(new fromStore.LoadFieldsOfStudy());
  }

  getSubjectsPage(page: number, size: number) {
    this.store.dispatch(new fromStore.LoadSubjects({ page, size }));
  }

  pageChanged(event: any): void {
    this.getSubjectsPage(event.page - 1, event.itemsPerPage);
  }

  addSubject() {
    if (
      !this.newSubject.espb ||
      !this.newSubject.name ||
      !this.newSubject.subjectNo ||
      !this.newSubject.year
    ) {
      this.errorMsg = "Morate popuniti sva polja.";
    } else {
      this.newSubject.fieldsOfStudyDTO = new FieldsOfStudy();
      this.newSubject.fieldsOfStudyDTO.name = this.selectFieldsOfStudy.nativeElement.value;
      console.log(this.newSubject);
      this.subjectExists
        ? this.store.dispatch(new fromStore.EditSubject(this.newSubject))
        : this.store.dispatch(new fromStore.AddSubject(this.newSubject));
      this.closeModalBtn["nativeElement"].click();
      this.newSubject = new Subject();
      this.store.dispatch(new fromStore.LoadSubjects({ page: 0, size: 6 }));
      this.subjects$ = this.store.select(fromStore.getSubjects);
    }
  }

  setSubjectExists(status) {
    this.subjectExists = status;
    this.newSubject = new Subject();

    this.fieldsOfStudy$ = this.store.select(fromStore.getFieldsOfStudy);
  }

  editSubject(id) {
    this.openModalBtn["nativeElement"].click();
    this.subject$ = this.store.select(fromStore.getSubject, id);
    this.subject$.subscribe(p => {
      this.newSubject = p;
    });
    this.subjectExists = true;
  }

  getSelectedSubject(id) {
    this.selectedSubjectIdToDelete = id;
  }

  deleteSubject() {
    this.store.dispatch(
      new fromStore.DeleteSubject(this.selectedSubjectIdToDelete)
    );
    this.closeDeleteModalBtn["nativeElement"].click();
  }
}
