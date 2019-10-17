import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

@Injectable()
export class SubjectService {
  constructor(private http: HttpClient) {}
  getAllSubjects(page, size): Observable<any> {
    return this.http.get("/api/subject/" + page + "/" + size);
  }

  addSubject(subject): Observable<any> {
    return this.http.post("/api/subject/register", subject);
  }

  editSubject(subject): Observable<any> {
    return this.http.put("/api/subject/update", subject);
  }

  deleteSubject(id): Observable<any> {
    return this.http.delete("/api/subject/delete/" + id);
  }

  getAllStudentSubjects(studentId): Observable<any> {
    return this.http.get("/api/subject/student/" + studentId);
  }

  getAllProfessorSubjects(professorId): Observable<any> {
    return this.http.get("/api/subject/professor/" + professorId);
  }
}
