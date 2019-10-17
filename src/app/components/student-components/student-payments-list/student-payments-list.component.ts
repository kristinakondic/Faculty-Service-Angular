import { Component, OnInit, Input } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { User } from "src/app/models/user.model";
import * as fromStore from "../../../store";
import { Store } from "@ngrx/store";
import { PaymentPageable } from "src/app/models/payment-pageable.model";
import { Payment } from "src/app/models/payment.model";

@Component({
  selector: "app-student-payments-list",
  templateUrl: "./student-payments-list.component.html",
  styleUrls: ["./student-payments-list.component.scss"]
})
export class StudentPaymentsListComponent implements OnInit {
  @Input() user$: Observable<User>;
  subscription: Subscription;
  paymentsPageable$: Observable<PaymentPageable>;
  payments$: Observable<Payment[]>;
  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.subscription = this.user$.subscribe(u => {
      if (u.id) {
        this.getPaymentsPage(0, 6, u.id);
      }
    });
    this.payments$ = this.store.select(fromStore.getPayments);
    this.paymentsPageable$ = this.store.select(fromStore.getPaymentsPageable);
  }

  getPaymentsPage(page: number, size: number, id: number) {
    this.store.dispatch(new fromStore.LoadPayments({ page, size, id }));
  }

  pageChanged(event: any): void {
    this.getPaymentsPage(event.page - 1, event.itemsPerPage, 2);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
