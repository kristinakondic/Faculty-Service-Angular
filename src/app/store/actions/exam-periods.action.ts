import { Action } from "@ngrx/store";

// load examPeriods
export const LOAD_EXAM_PERIODS = "[ExamPeriods] Load ExamPeriods";
export const LOAD_EXAM_PERIODS_FAIL = "[ExamPeriods] Load ExamPeriods Fail";
export const LOAD_EXAM_PERIODS_SUCCESS =
  "[ExamPeriods] Load ExamPeriods Success";

export class LoadExamPeriods implements Action {
  readonly type = LOAD_EXAM_PERIODS;
}

export class LoadExamPeriodsFail implements Action {
  readonly type = LOAD_EXAM_PERIODS_FAIL;
  constructor(public payload: any) {}
}

export class LoadExamPeriodsSuccess implements Action {
  readonly type = LOAD_EXAM_PERIODS_SUCCESS;
  constructor(public payload: any) {}
}

// action types
export type ExamPeriodsAction =
  | LoadExamPeriods
  | LoadExamPeriodsFail
  | LoadExamPeriodsSuccess;
