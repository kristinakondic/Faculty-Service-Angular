import { LoginService } from "./login.service";
import { UserService } from "./user.service";
import { ProfessorService } from "./professor.service";
import { StudentService } from "./student.service";
import { SubjectService } from "./subject.service";
import { ExamService } from "./exam.service";
import { PaymentService } from "./payment.service";
import { FieldsOfStudyService } from "./fields-of-study.service";
import { ExamPeriodService } from "./exam-period.service";
import { ExamParticipationService } from "./exam-participation.service";

export const services: any[] = [
  LoginService,
  UserService,
  ProfessorService,
  StudentService,
  SubjectService,
  ExamService,
  PaymentService,
  FieldsOfStudyService,
  ExamPeriodService,
  ExamParticipationService
];

export * from "./login.service";
export * from "./user.service";
export * from "./professor.service";
export * from "./student.service";
export * from "./subject.service";
export * from "./exam.service";
export * from "./payment.service";
export * from "./fields-of-study.service";
export * from "./exam-period.service";
export * from "./exam-participation.service";
