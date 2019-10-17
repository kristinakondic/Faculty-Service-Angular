import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

@Injectable()
export class ExamService {
  constructor(private http: HttpClient) {}
  getAllExams(page, size): Observable<any> {
    return this.http.get("/api/exam/" + page + "/" + size);
  }

  addExam(exam): Observable<any> {
    return this.http.post("/api/exam/add", exam);
  }

  editExam(exam): Observable<any> {
    return this.http.put("/api/exam/update", exam);
  }

  deleteExam(id): Observable<any> {
    return this.http.delete("/api/exam/delete/" + id);
  }

  getAllProfessorExams(professorId): Observable<any> {
    return this.http.get("/api/exam/professorExams/" + professorId);
  }

  getAllProfessorTests(professorId): Observable<any> {
    return this.http.get("/api/exam/professorTests/" + professorId);
  }
}
