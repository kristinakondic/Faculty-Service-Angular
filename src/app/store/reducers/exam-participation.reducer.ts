import * as fromExamParticipations from "../actions/exam-participation.action";
import { ExamParticipation } from "../../models/exam-participation.model";

export interface ExamParticipationsState {
  data: ExamParticipation[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ExamParticipationsState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromExamParticipations.ExamParticipationsAction
): ExamParticipationsState {
  switch (action.type) {
    case fromExamParticipations.LOAD_EXAM_PARTICIPATIONS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromExamParticipations.LOAD_EXAM_PARTICIPATIONS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromExamParticipations.LOAD_EXAM_PARTICIPATIONS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getExamParticipationsLoading = (state: ExamParticipationsState) =>
  state.loading;
export const getExamParticipationsLoaded = (state: ExamParticipationsState) =>
  state.loaded;
export const getExamParticipations = (state: ExamParticipationsState) =>
  state.data;
