import { Action } from "@ngrx/store";

// load examParticipations
export const LOAD_EXAM_PARTICIPATIONS =
  "[ExamParticipations] Load ExamParticipations";
export const LOAD_EXAM_PARTICIPATIONS_FAIL =
  "[ExamParticipations] Load ExamParticipations Fail";
export const LOAD_EXAM_PARTICIPATIONS_SUCCESS =
  "[ExamParticipations] Load ExamParticipations Success";

export class LoadExamParticipations implements Action {
  readonly type = LOAD_EXAM_PARTICIPATIONS;
  constructor(public payload: any) {}
}

export class LoadExamParticipationsFail implements Action {
  readonly type = LOAD_EXAM_PARTICIPATIONS_FAIL;
  constructor(public payload: any) {}
}

export class LoadExamParticipationsSuccess implements Action {
  readonly type = LOAD_EXAM_PARTICIPATIONS_SUCCESS;
  constructor(public payload: any) {}
}

// action types
export type ExamParticipationsAction =
  | LoadExamParticipations
  | LoadExamParticipationsFail
  | LoadExamParticipationsSuccess;
