import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { API_URL } from "../api";
@Injectable()
export class ExamService {
  constructor(private http: HttpClient) {}
  getAllExams(page, size): Observable<any> {
    return this.http.get(API_URL + "/api/exam/" + page + "/" + size);
  }

  addExam(exam): Observable<any> {
    return this.http.post(API_URL + "/api/exam/add", exam);
  }

  editExam(exam): Observable<any> {
    return this.http.put(API_URL + "/api/exam/update", exam);
  }

  deleteExam(id): Observable<any> {
    return this.http.delete(API_URL + "/api/exam/delete/" + id);
  }

  getAllProfessorExams(professorId): Observable<any> {
    return this.http.get(API_URL + "/api/exam/professorExams/" + professorId);
  }

  getAllProfessorTests(professorId): Observable<any> {
    return this.http.get(API_URL + "/api/exam/professorTests/" + professorId);
  }
}
