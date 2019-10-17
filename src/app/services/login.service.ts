import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}
  login(credentials): Observable<any> {
    console.log(credentials);
    return this.http.post("/api/user/login", credentials).pipe(
      map((res: any) => {
        console.log(res);
        let token = res.jwt;
        if (token != null) {
          console.log(token);
          let jwtData = token.split(".")[1];
          let decodedJwtJsonData = window.atob(jwtData);
          let claims = JSON.parse(decodedJwtJsonData);
          let role = claims.role[0].authority;
          let loginInfo = { email: credentials.email, role: role };
          return loginInfo;
        } else {
          return false;
        }
      }),
      catchError((error: any) => {
        if (error.status === 401) return throwError("Unauthorized");
        else return throwError(error || "Server error");
      })
    );
  }
}
