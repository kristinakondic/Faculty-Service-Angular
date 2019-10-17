import * as fromExam from "../actions/exams.action";
import { Exam } from "../../models/exam.model";

export interface TestsListState {
  data: Exam[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: TestsListState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromExam.ExamListAction
): TestsListState {
  switch (action.type) {
    //load professor test
    case fromExam.LOAD_PROFESSOR_TESTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromExam.LOAD_PROFESSOR_TESTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromExam.LOAD_PROFESSOR_TESTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getAllProfessorTests = (state: TestsListState) => state.data;
