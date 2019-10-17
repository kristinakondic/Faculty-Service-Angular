import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}
  getAllStudents(page, size): Observable<any> {
    return this.http.get("/api/student/" + page + "/" + size);
  }

  addStudent(student): Observable<any> {
    return this.http.post("/api/student/register", student);
  }

  editStudent(student): Observable<any> {
    return this.http.put("/api/student/update", student);
  }

  deleteStudent(id): Observable<any> {
    return this.http.delete("/api/student/delete/" + id);
  }
}
