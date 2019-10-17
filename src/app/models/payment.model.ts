import { Student } from "./student.model";

export class Payment {
  id: any;
  value: any;
  date: any;
  student: Student;

  constructor() {
    this.id = null;
    this.value = null;
    this.date = null;
    this.student = new Student();
  }
}
