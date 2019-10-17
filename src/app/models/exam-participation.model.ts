import { Student } from "./student.model";
import { Exam } from "./exam.model";

export class ExamParticipation {
  id: any;
  student: Student;
  exam: Exam;
  points: any;
  passed: any;
  grade: any;

  constructor() {
    this.id = null;
    this.student = new Student();
    this.exam = new Exam();
    this.points = null;
    this.passed = null;
    this.grade = null;
  }
}
