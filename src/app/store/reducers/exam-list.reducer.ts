import * as fromExam from "../actions/exams.action";
import { Exam } from "../../models/exam.model";

export interface ExamsListState {
  data: Exam[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: ExamsListState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromExam.ExamListAction
): ExamsListState {
  switch (action.type) {
    //load professor exam
    case fromExam.LOAD_PROFESSOR_EXAMS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromExam.LOAD_PROFESSOR_EXAMS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromExam.LOAD_PROFESSOR_EXAMS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getAllProfessorExams = (state: ExamsListState) => state.data;
