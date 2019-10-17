import * as fromExamPeriods from "../actions/exam-periods.action";
import { ExamPeriod } from "../../models/exam-period.model";

export interface ExamPeriodsState {
  data: ExamPeriod[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ExamPeriodsState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromExamPeriods.ExamPeriodsAction
): ExamPeriodsState {
  switch (action.type) {
    case fromExamPeriods.LOAD_EXAM_PERIODS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromExamPeriods.LOAD_EXAM_PERIODS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromExamPeriods.LOAD_EXAM_PERIODS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getExamPeriodsLoading = (state: ExamPeriodsState) => state.loading;
export const getExamPeriodsLoaded = (state: ExamPeriodsState) => state.loaded;
export const getExamPeriods = (state: ExamPeriodsState) => state.data;
