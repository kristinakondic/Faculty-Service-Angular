import { Professor } from "./professor.model";

export interface ProfessorPageable {
  content: Professor[];
  size: any;
}
