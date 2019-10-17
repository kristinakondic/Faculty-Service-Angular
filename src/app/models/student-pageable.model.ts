import { Student } from "./student.model";

export interface StudentPageable {
  content: Student[];
  size: any;
}
