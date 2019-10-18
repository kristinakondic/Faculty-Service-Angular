import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { API_URL } from "../api";
@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}
  getAllStudents(page, size): Observable<any> {
    return this.http.get(API_URL + "/api/student/" + page + "/" + size);
  }

  addStudent(student): Observable<any> {
    return this.http.post(API_URL + "/api/student/register", student);
  }

  editStudent(student): Observable<any> {
    return this.http.put(API_URL + "/api/student/update", student);
  }

  deleteStudent(id): Observable<any> {
    return this.http.delete(API_URL + "/api/student/delete/" + id);
  }

  getStudent(email): Observable<any> {
    return this.http.get(API_URL + "/api/student/email/" + email);
  }
}
