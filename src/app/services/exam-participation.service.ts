import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { API_URL } from "../api";
@Injectable()
export class ExamParticipationService {
  constructor(private http: HttpClient) {}

  getExamParticipations(examId): Observable<any> {
    return this.http.get(API_URL + "/api/examParticipation/" + examId);
  }
}
