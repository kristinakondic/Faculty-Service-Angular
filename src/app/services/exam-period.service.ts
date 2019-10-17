import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { API_URL } from "../api";
@Injectable()
export class ExamPeriodService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(API_URL + "/api/examPeriod/");
  }
}
