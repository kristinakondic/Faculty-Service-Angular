import { Subject } from "./subject.model";
import { ExamPeriod } from "./exam-period.model";

export class Exam {
  id: any;
  subjectDTO: Subject;
  examPeriodDTO: any;
  classroom: any;
  date: any;
  type: any;

  constructor() {
    this.id = null;
    this.subjectDTO = new Subject();
    this.examPeriodDTO = new ExamPeriod();
    this.classroom = null;
    this.date = null;
    this.type = null;
  }
}
