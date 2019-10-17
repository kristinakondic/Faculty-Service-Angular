import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { API_URL } from "../api";
@Injectable()
export class ProfessorService {
  constructor(private http: HttpClient) {}
  getAllProfessors(page, size): Observable<any> {
    return this.http.get(API_URL + "/api/professor/" + page + "/" + size);
  }

  addProfessor(professor): Observable<any> {
    return this.http.post(API_URL + "/api/professor/register", professor);
  }

  editProfessor(professor): Observable<any> {
    return this.http.put(API_URL + "/api/professor/update", professor);
  }

  deleteProfessor(id): Observable<any> {
    return this.http.delete(API_URL + "/api/professor/delete/" + id);
  }
}
