import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, throwError } from "rxjs";

@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) {}
  getAllPayments(page, size, id): Observable<any> {
    return this.http.get("/api/payment/" + page + "/" + size + "/" + id);
  }

  addPayment(payment): Observable<any> {
    return this.http.post("/api/payment/add", payment);
  }
}
