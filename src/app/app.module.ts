import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./components/admin-components/admin/admin.component";
import { TabsModule, PaginationModule } from "ngx-bootstrap";
import { MainComponent } from "./pages/main/main.component";
import { ProfessorComponent } from "./components/professor-components/professor/professor.component";
import { StudentComponent } from "./components/student-components/student/student.component";
import { LoginComponent } from "./pages/login/login.component";
import { FormsModule } from "@angular/forms";
import { AutocompleteLibModule } from "angular-ng-autocomplete";

import * as fromServices from "./services";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from "./store";
import { NavbarComponent } from "./components/common/navbar/navbar.component";
import { ProfessorsListComponent } from "./components/admin-components/professors-list/professors-list.component";
import { UserInfoComponent } from "./components/common/user-info/user-info.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { ModalModule, BsModalRef } from "ngx-bootstrap";
import { StudentListComponent } from "./components/admin-components/students-list/students-list.component";
import { SubjectsListComponent } from "./components/admin-components/subjects-list/subjects-list.component";
import { ExamsListComponent } from "./components/admin-components/exams-list/exams-list.component";
import { PaymentComponent } from "./components/admin-components/payment/payment.component";
import { StudentAllSubjectListComponent } from "./components/student-components/student-all-subject-list/student-all-subject-list.component";
import { StudentPassedSubjectListComponent } from "./components/student-components/student-passed-subject-list/student-passed-subject-list.component";
import { StudentUnpassedSubjectListComponent } from "./components/student-components/student-unpassed-subject-list/student-unpassed-subject-list.component";
import { StudentPaymentsListComponent } from "./components/student-components/student-payments-list/student-payments-list.component";
import { ProfessorSubjectsListComponent } from "./components/professor-components/professor-subjects-list/professor-subjects-list.component";
import { ProfessorExamsListComponent } from "./components/professor-components/professor-exams-list/professor-exams-list.component";
import { ProfessorTestsListComponent } from "./components/professor-components/professor-tests-list/professor-tests-list.component";
import { ExamRegistrationComponent } from "./components/student-components/exam-registration/exam-registration.component";
import { ExamResultsComponent } from './components/professor-components/exam-results/exam-results.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    MainComponent,
    ProfessorComponent,
    StudentComponent,
    LoginComponent,
    NavbarComponent,
    ProfessorsListComponent,
    UserInfoComponent,
    NotFoundComponent,
    StudentListComponent,
    SubjectsListComponent,
    ExamsListComponent,
    PaymentComponent,
    StudentAllSubjectListComponent,
    StudentPassedSubjectListComponent,
    StudentUnpassedSubjectListComponent,
    StudentPaymentsListComponent,
    ProfessorSubjectsListComponent,
    ProfessorExamsListComponent,
    ProfessorTestsListComponent,
    ExamRegistrationComponent,
    ExamResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AutocompleteLibModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature("appState", reducers),
    EffectsModule.forRoot(effects),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    StoreDevtoolsModule.instrument()
  ],
  providers: [...fromServices.services, BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule {}
