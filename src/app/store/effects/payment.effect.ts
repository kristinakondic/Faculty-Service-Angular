import { Injectable } from "@angular/core";

import { Effect, Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";

import * as paymentActions from "../actions/payments.action";
import * as fromServices from "../../services";

@Injectable()
export class PaymentsEffects {
  constructor(
    private actions$: Actions,
    private paymentService: fromServices.PaymentService
  ) {}
  //load payments
  @Effect()
  loadPayments$ = this.actions$.pipe(
    ofType(paymentActions.LOAD_PAYMENTS),
    switchMap(action => {
      return this.paymentService
        .getAllPayments(
          action["payload"]["page"],
          action["payload"]["size"],
          action["payload"]["id"]
        )
        .pipe(
          map(payments => new paymentActions.LoadPaymentsSuccess(payments)),
          catchError(error => of(new paymentActions.LoadPaymentsFail(error)))
        );
    })
  );
  //add payment
  @Effect()
  addPayment$ = this.actions$.pipe(
    ofType(paymentActions.ADD_PAYMENT),
    switchMap(action => {
      return this.paymentService.addPayment(action["payload"]).pipe(
        map(() => new paymentActions.AddPaymentSuccess(action["payload"])),
        catchError(error => of(new paymentActions.AddPaymentFail(error)))
      );
    })
  );
}
