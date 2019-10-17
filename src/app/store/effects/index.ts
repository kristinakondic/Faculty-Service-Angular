import { LoginEffects } from "./login.effect";
import { UserEffects } from "./user.effect";
import { ProfessorsEffects } from "./professor.effect";
import { StudentsEffects } from "./student.effect";
import { SubjectsEffects } from "./subject.effect";
import { ExamsEffects } from "./exam.effect";
import { PaymentsEffects } from "./payment.effect";
import { FieldsOfStudysEffects } from "./fields-of-study.effect";
import { ExamPeriodsEffects } from "./exam-period.effects";
import { ExamParticipationsEffects } from "./exam-participation.effect";

export const effects: any[] = [
  LoginEffects,
  UserEffects,
  ProfessorsEffects,
  StudentsEffects,
  SubjectsEffects,
  ExamsEffects,
  PaymentsEffects,
  FieldsOfStudysEffects,
  ExamPeriodsEffects,
  ExamParticipationsEffects
];

export * from "./login.effect";
export * from "./user.effect";
export * from "./professor.effect";
export * from "./student.effect";
export * from "./subject.effect";
export * from "./exam.effect";
export * from "./payment.effect";
export * from "./fields-of-study.effect";
export * from "./exam-period.effects";
export * from "./exam-participation.effect";
