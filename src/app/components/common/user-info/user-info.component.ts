import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ChangePass } from "../../../models/changePass.model";
import * as fromStore from "../../../store";
import { Store } from "@ngrx/store";
import { ModalDirective } from "ngx-bootstrap";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"]
})
export class UserInfoComponent implements OnInit {
  @Input() user$: Observable<any>;
  changePass: ChangePass = new ChangePass();
  subscription: Subscription;
  errorMsg: any;
  @ViewChild("closeModalBtn") public closeModalBtn: ModalDirective;

  constructor(private store: Store<fromStore.AppState>) {}

  ngOnInit() {}

  changePassword() {
    if (this.changePass.repeatedPass == this.changePass.newPassword) {
      this.subscription = this.user$.subscribe(u => {
        this.changePass.userEmail = u.email;
        this.store.dispatch(new fromStore.ChangePassword(this.changePass));
        this.closeModalBtn["nativeElement"].click();
        this.changePass = new ChangePass();
      });
    } else {
      this.errorMsg = "Neuspešna promena lozinke.";
    }
  }

  onDestroy() {
    this.subscription.unsubscribe();
  }
}
