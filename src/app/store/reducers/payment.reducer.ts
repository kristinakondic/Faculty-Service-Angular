import * as fromPayment from "../actions/payments.action";
import { PaymentPageable } from "../../models/payment-pageable.model";

export interface PaymentsState {
  data: PaymentPageable;
  loaded: boolean;
  loading: boolean;
}

export const initialState: PaymentsState = {
  data: { content: [], size: null },
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPayment.PaymentsAction
): PaymentsState {
  switch (action.type) {
    case fromPayment.LOAD_PAYMENTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPayment.LOAD_PAYMENTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data ? data : state.data
      };
    }

    case fromPayment.LOAD_PAYMENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    //add payment
    case fromPayment.ADD_PAYMENT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromPayment.ADD_PAYMENT_SUCCESS: {
      const payment = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, payment] }
      };
    }

    case fromPayment.ADD_PAYMENT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }
  return state;
}
export const getPaymentsLoading = (state: PaymentsState) => state.loading;
export const getPaymentsLoaded = (state: PaymentsState) => state.loaded;
export const getPayments = (state: PaymentsState) => state.data.content;
export const getPaymentsPageable = (state: PaymentsState) => state.data;
