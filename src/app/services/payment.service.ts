import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { API_URL } from "../api";
@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) {}
  getAllPayments(page, size, id): Observable<any> {
    return this.http.get(
      API_URL + "/api/payment/" + page + "/" + size + "/" + id
    );
  }

  addPayment(payment): Observable<any> {
    return this.http.post(API_URL + "/api/payment/add", payment);
  }
}
