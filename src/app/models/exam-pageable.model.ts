import { Exam } from "./exam.model";

export interface ExamPageable {
  content: Exam[];
  size: any;
}
