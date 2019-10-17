import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { API_URL } from "../api";
@Injectable()
export class SubjectService {
  constructor(private http: HttpClient) {}
  getAllSubjects(page, size): Observable<any> {
    return this.http.get(API_URL + "/api/subject/" + page + "/" + size);
  }

  addSubject(subject): Observable<any> {
    return this.http.post(API_URL + "/api/subject/register", subject);
  }

  editSubject(subject): Observable<any> {
    return this.http.put(API_URL + "/api/subject/update", subject);
  }

  deleteSubject(id): Observable<any> {
    return this.http.delete(API_URL + "/api/subject/delete/" + id);
  }

  getAllStudentSubjects(studentId): Observable<any> {
    return this.http.get(API_URL + "/api/subject/student/" + studentId);
  }

  getAllProfessorSubjects(professorId): Observable<any> {
    return this.http.get(API_URL + "/api/subject/professor/" + professorId);
  }
}
