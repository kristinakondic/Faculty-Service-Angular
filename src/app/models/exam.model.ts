import { Subject } from "./subject.model";
import { ExamPeriod } from "./exam-period.model";

export class Exam {
  id: any;
  subject: Subject;
  examPeriod: any;
  classroom: any;
  date: any;
  type: any;

  constructor() {
    this.id = null;
    this.subject = new Subject();
    this.examPeriod = new ExamPeriod();
    this.classroom = null;
    this.date = null;
    this.type = null;
  }
}
