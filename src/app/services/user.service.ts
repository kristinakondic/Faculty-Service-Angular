import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUser(email): Observable<any> {
    return this.http.get("/api/user/" + email);
  }

  changePassword(changePass): Observable<any> {
    return this.http.put("api/user/changePass", changePass);
  }
}
