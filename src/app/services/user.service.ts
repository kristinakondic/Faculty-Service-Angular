import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { API_URL } from "../api";
@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUser(email): Observable<any> {
    return this.http.get(API_URL + "/api/user/" + email);
  }

  changePassword(changePass): Observable<any> {
    return this.http.put(API_URL + "api/user/changePass", changePass);
  }
}
