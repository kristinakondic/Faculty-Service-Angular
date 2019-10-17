import { Component, OnInit, ViewChild } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromStore from "../../../store";
import { Exam } from "src/app/models/exam.model";
import { Observable } from "rxjs";
import { ExamPageable } from "src/app/models/exam-pageable.model";
import { ModalDirective } from "ngx-bootstrap";
import { Subject } from "src/app/models/subject.model";
import { ExamPeriod } from "src/app/models/exam-period.model";

@Component({
  selector: "app-exams-list",
  templateUrl: "./exams-list.component.html",
  styleUrls: ["./exams-list.component.scss"]
})
export class ExamsListComponent implements OnInit {
  exams$: Observable<Exam[]>;
  exam$: Observable<Exam>;
  examsPageable$: Observable<ExamPageable>;
  newExam = new Exam();
  examExists = null;
  selectedExamIdToDelete = null;
  subjects$: Observable<Subject[]>;
  examPeriods$: Observable<ExamPeriod[]>;
  errorMsg = "";

  constructor(private store: Store<fromStore.AppState>) {}

  @ViewChild("selectType") selectType = {
    nativeElement: { value: null }
  };
  @ViewChild("selectSubject") selectSubject = {
    nativeElement: { value: null }
  };
  @ViewChild("selectExamPeriod") selectExamPeriod = {
    nativeElement: { value: null }
  };
  @ViewChild("closeModalBtn") public closeModalBtn: ModalDirective;
  @ViewChild("openModalBtn") public openModalBtn: ModalDirective;
  @ViewChild("closeDeleteModalBtn") public closeDeleteModalBtn: ModalDirective;

  ngOnInit() {
    this.exams$ = this.store.select(fromStore.getExams);

    this.examsPageable$ = this.store.select(fromStore.getExamsPageable);
    this.getExamsPage(0, 6);

    this.store.dispatch(new fromStore.LoadExamPeriods());
  }

  getExamsPage(page: number, size: number) {
    this.store.dispatch(new fromStore.LoadExams({ page, size }));
  }

  pageChanged(event: any): void {
    this.getExamsPage(event.page - 1, event.itemsPerPage);
  }

  addExam() {
    if (this.newExam.classroom == null || this.newExam.date == null) {
      this.errorMsg = "Popunite sva polja.";
    } else {
      this.newExam.type = this.selectType.nativeElement.value;
      this.newExam.subjectDTO = new Subject();
      this.newExam.subjectDTO.name = this.selectSubject.nativeElement.value;
      this.newExam.examPeriodDTO = new ExamPeriod();
      this.newExam.examPeriodDTO.name = this.selectExamPeriod.nativeElement.value;
      console.log(JSON.stringify(this.newExam));
      this.examExists
        ? this.store.dispatch(new fromStore.EditExam(this.newExam))
        : this.store.dispatch(new fromStore.AddExam(this.newExam));
      this.closeModalBtn["nativeElement"].click();
      this.newExam = new Exam();
    }
  }

  setExamExists(status) {
    this.subjects$ = this.store.select(fromStore.getSubjects);
    this.examPeriods$ = this.store.select(fromStore.getExamPeriods);
    this.examExists = status;
    this.newExam = new Exam();
  }

  editExam(id) {
    this.openModalBtn["nativeElement"].click();
    this.exam$ = this.store.select(fromStore.getExam, id);
    this.exam$.subscribe(p => {
      this.newExam = p;
    });
    this.examExists = true;
  }

  getSelectedExam(id) {
    this.selectedExamIdToDelete = id;
  }

  deleteExam() {
    this.store.dispatch(new fromStore.DeleteExam(this.selectedExamIdToDelete));
    this.closeDeleteModalBtn["nativeElement"].click();
  }
}
