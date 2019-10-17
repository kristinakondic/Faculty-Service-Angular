import { Action } from "@ngrx/store";

import { PaymentPageable } from "../../models/payment-pageable.model";
import { Payment } from "src/app/models/payment.model";

// load payments
export const LOAD_PAYMENTS = "[Payments] Load Payments";
export const LOAD_PAYMENTS_FAIL = "[Payments] Load Payments Fail";
export const LOAD_PAYMENTS_SUCCESS = "[Payments] Load Payments Success";

export class LoadPayments implements Action {
  readonly type = LOAD_PAYMENTS;
  constructor(public payload: any) {}
}

export class LoadPaymentsFail implements Action {
  readonly type = LOAD_PAYMENTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPaymentsSuccess implements Action {
  readonly type = LOAD_PAYMENTS_SUCCESS;
  constructor(public payload: PaymentPageable) {}
}

// add payment
export const ADD_PAYMENT = "[Payment] Add Payment";
export const ADD_PAYMENT_FAIL = "[Payment] Add Payment Fail";
export const ADD_PAYMENT_SUCCESS = "[Payment] Add Payment Success";

export class AddPayment implements Action {
  readonly type = ADD_PAYMENT;
  constructor(public payload: any) {}
}

export class AddPaymentFail implements Action {
  readonly type = ADD_PAYMENT_FAIL;
  constructor(public payload: any) {}
}

export class AddPaymentSuccess implements Action {
  readonly type = ADD_PAYMENT_SUCCESS;
  constructor(public payload: Payment) {}
}

// action types
export type PaymentsAction =
  | LoadPayments
  | LoadPaymentsFail
  | LoadPaymentsSuccess
  | AddPayment
  | AddPaymentFail
  | AddPaymentSuccess;
