import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

@Injectable()
export class ProfessorService {
  constructor(private http: HttpClient) {}
  getAllProfessors(page, size): Observable<any> {
    return this.http.get("/api/professor/" + page + "/" + size);
  }

  addProfessor(professor): Observable<any> {
    return this.http.post("/api/professor/register", professor);
  }

  editProfessor(professor): Observable<any> {
    return this.http.put("/api/professor/update", professor);
  }

  deleteProfessor(id): Observable<any> {
    return this.http.delete("/api/professor/delete/" + id);
  }
}
