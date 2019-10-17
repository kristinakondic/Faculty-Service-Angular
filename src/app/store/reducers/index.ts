import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector
} from "@ngrx/store";

import * as fromLogin from "./login.reducer";
import * as fromUser from "./user.reducer";
import * as fromProfessors from "./professor.reducer";
import * as fromStudents from "./student.reducer";
import * as fromSubjects from "./subject.reducer";
import * as fromExams from "./exam.reducer";
import * as fromPayments from "./payment.reducer";
import * as fromSubjectList from "./subject-list.reducer";
import * as fromExamList from "./exam-list.reducer";
import * as fromTestList from "./test-list.reducer";
import * as fromFieldsOfStudy from "./fields-of-study.reducer";
import * as fromExamPeriods from "./exam-period.reducer";
import * as fromExamParticipations from "./exam-participation.reducer";

export interface AppState {
  login: fromLogin.LoginState;
  user: fromUser.UserState;
  professors: fromProfessors.ProfessorsState;
  students: fromStudents.StudentsState;
  subjects: fromSubjects.SubjectsState;
  exams: fromExams.ExamsState;
  payments: fromPayments.PaymentsState;
  subjectList: fromSubjectList.SubjectsListState;
  examList: fromExamList.ExamsListState;
  testList: fromTestList.TestsListState;
  fieldsOfStudy: fromFieldsOfStudy.FieldsOfStudyState;
  examPeriods: fromExamPeriods.ExamPeriodsState;
  examParticipations: fromExamParticipations.ExamParticipationsState;
}

export const reducers: ActionReducerMap<AppState> = {
  login: fromLogin.reducer,
  user: fromUser.reducer,
  professors: fromProfessors.reducer,
  students: fromStudents.reducer,
  subjects: fromSubjects.reducer,
  exams: fromExams.reducer,
  payments: fromPayments.reducer,
  subjectList: fromSubjectList.reducer,
  examList: fromExamList.reducer,
  testList: fromTestList.reducer,
  fieldsOfStudy: fromFieldsOfStudy.reducer,
  examPeriods: fromExamPeriods.reducer,
  examParticipations: fromExamParticipations.reducer
};

// selectors
export const getAppState = createFeatureSelector<AppState>("appState");

//loginState
export const getLoginState = createSelector(
  getAppState,
  (state: AppState) => state.login
);

export const getLogin = createSelector(
  getLoginState,
  fromLogin.getLogin
);
export const getLoginError = createSelector(
  getLoginState,
  fromLogin.getLoginError
);
export const getLoginLoading = createSelector(
  getLoginState,
  fromLogin.getLoginLoading
);
export const getLoginRole = createSelector(
  getLoginState,
  fromLogin.getLoginRole
);
export const getLoginEmail = createSelector(
  getLoginState,
  fromLogin.getLoginEmail
);
export const getLoginStatus = createSelector(
  getLoginState,
  fromLogin.getLoginStatus
);

//userState
export const getUserState = createSelector(
  getAppState,
  (state: AppState) => state.user
);

export const getUser = createSelector(
  getUserState,
  fromUser.getUser
);
export const getUserError = createSelector(
  getUserState,
  fromUser.getUserError
);
export const getUserLoading = createSelector(
  getUserState,
  fromUser.getUserLoading
);

//professorState
export const getProfessorsState = createSelector(
  getAppState,
  (state: AppState) => state.professors
);

export const getProfessors = createSelector(
  getProfessorsState,
  fromProfessors.getProfessors
);

export const getProfessorsLoading = createSelector(
  getProfessorsState,
  fromProfessors.getProfessorsLoading
);

export const getProfessorsPageable = createSelector(
  getProfessorsState,
  fromProfessors.getProfessorsPageable
);

export const getProfessor = createSelector(
  getProfessorsState,
  fromProfessors.getProfessor
);

//studentState
export const getStudentsState = createSelector(
  getAppState,
  (state: AppState) => state.students
);

export const getStudents = createSelector(
  getStudentsState,
  fromStudents.getStudents
);

export const getStudentsLoading = createSelector(
  getStudentsState,
  fromStudents.getStudentsLoading
);

export const getStudentsPageable = createSelector(
  getStudentsState,
  fromStudents.getStudentsPageable
);

export const getStudent = createSelector(
  getStudentsState,
  fromStudents.getStudent
);

//subjectState
export const getSubjectsState = createSelector(
  getAppState,
  (state: AppState) => state.subjects
);

export const getSubjects = createSelector(
  getSubjectsState,
  fromSubjects.getSubjects
);

export const getSubjectsLoading = createSelector(
  getSubjectsState,
  fromSubjects.getSubjectsLoading
);

export const getSubjectsPageable = createSelector(
  getSubjectsState,
  fromSubjects.getSubjectsPageable
);

export const getSubject = createSelector(
  getSubjectsState,
  fromSubjects.getSubject
);

//subjectListState
export const getSubjectListState = createSelector(
  getAppState,
  (state: AppState) => state.subjectList
);

export const getAllStudentSubjects = createSelector(
  getSubjectListState,
  fromSubjectList.getAllStudentSubjects
);

export const getAllProfessorSubjects = createSelector(
  getSubjectListState,
  fromSubjectList.getAllProfessorSubjects
);

//examState
export const getExamsState = createSelector(
  getAppState,
  (state: AppState) => state.exams
);

export const getExams = createSelector(
  getExamsState,
  fromExams.getExams
);

export const getExamsLoading = createSelector(
  getExamsState,
  fromExams.getExamsLoading
);

export const getExamsPageable = createSelector(
  getExamsState,
  fromExams.getExamsPageable
);

export const getExam = createSelector(
  getExamsState,
  fromExams.getExam
);

//examListState
export const getExamListState = createSelector(
  getAppState,
  (state: AppState) => state.examList
);

export const getAllProfessorExams = createSelector(
  getExamListState,
  fromExamList.getAllProfessorExams
);

//testListState
export const getTestListState = createSelector(
  getAppState,
  (state: AppState) => state.testList
);

export const getAllProfessorTests = createSelector(
  getTestListState,
  fromTestList.getAllProfessorTests
);

//paymentState
export const getPaymentsState = createSelector(
  getAppState,
  (state: AppState) => state.payments
);

export const getPayments = createSelector(
  getPaymentsState,
  fromPayments.getPayments
);

export const getPaymentsLoading = createSelector(
  getPaymentsState,
  fromPayments.getPaymentsLoading
);

export const getPaymentsPageable = createSelector(
  getPaymentsState,
  fromPayments.getPaymentsPageable
);

//fieldsOfStudyState
export const getFieldsOfStudyState = createSelector(
  getAppState,
  (state: AppState) => state.fieldsOfStudy
);

export const getFieldsOfStudy = createSelector(
  getFieldsOfStudyState,
  fromFieldsOfStudy.getFieldsOfStudy
);

//examPeriodState
export const getExamPeriodsState = createSelector(
  getAppState,
  (state: AppState) => state.examPeriods
);

export const getExamPeriods = createSelector(
  getExamPeriodsState,
  fromExamPeriods.getExamPeriods
);

//examParticipationState
export const getExamParticipationsState = createSelector(
  getAppState,
  (state: AppState) => state.examParticipations
);

export const getExamParticipations = createSelector(
  getExamParticipationsState,
  fromExamParticipations.getExamParticipations
);
