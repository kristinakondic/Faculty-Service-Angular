import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "src/app/models/student.model";
import * as fromStore from "../../../store";
import { Store } from "@ngrx/store";
import { Payment } from "../../../models/payment.model";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.scss"]
})
export class PaymentComponent implements OnInit {
  students$: Observable<Student[]>;
  students: any;
  keyword = "fullId";
  payment: Payment = new Payment();
  errorMsg;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {
    this.students$ = this.store.select(fromStore.getStudents);
    this.students$.subscribe(studentss => {
      this.students = studentss;
      this.students.forEach(
        s =>
          (s["fullId"] =
            s.userDTO.name + " " + s.userDTO.surname + " " + s.indexNo)
      );
    });
  }

  selectEvent(item) {
    this.payment.student = item;
  }

  pay() {
    console.log(this.payment);
    if (this.payment.value == null || this.payment.student == null) {
      this.errorMsg = "Morate popuniti sva polja";
    } else {
      this.store.dispatch(new fromStore.AddPayment(this.payment));
      alert("Uspešno uplaćen novac.");
      this.payment.value = "";
      this.errorMsg = "";
    }
  }
}
