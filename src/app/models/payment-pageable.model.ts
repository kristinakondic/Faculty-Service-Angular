import { Payment } from "./payment.model";

export interface PaymentPageable {
  content: Payment[];
  size: any;
}
