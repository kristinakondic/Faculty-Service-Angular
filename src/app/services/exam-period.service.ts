import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class ExamPeriodService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get("/api/examPeriod/");
  }
}
