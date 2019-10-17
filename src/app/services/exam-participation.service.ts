import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class ExamParticipationService {
  constructor(private http: HttpClient) {}

  getExamParticipations(examId): Observable<any> {
    return this.http.get("/api/examParticipation/" + examId);
  }
}
