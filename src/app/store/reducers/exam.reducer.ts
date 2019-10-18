import * as fromExam from "../actions/exams.action";
import { ExamPageable } from "../../models/exam-pageable.model";

export interface ExamsState {
  data: ExamPageable;
  loaded: boolean;
  loading: boolean;
}

export const initialState: ExamsState = {
  data: { content: [], size: null },
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromExam.ExamsAction
): ExamsState {
  switch (action.type) {
    case fromExam.LOAD_EXAMS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromExam.LOAD_EXAMS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromExam.LOAD_EXAMS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    //add exam
    case fromExam.ADD_EXAM: {
      return {
        ...state,
        loading: true
      };
    }

    case fromExam.ADD_EXAM_SUCCESS: {
      const exam = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, exam] }
      };
    }

    case fromExam.ADD_EXAM_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //edit exam
    case fromExam.EDIT_EXAM: {
      return {
        ...state,
        loading: true
      };
    }

    case fromExam.EDIT_EXAM_SUCCESS: {
      const exam = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, exam] }
      };
    }

    case fromExam.EDIT_EXAM_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //delete exam
    case fromExam.DELETE_EXAM: {
      return {
        ...state,
        loading: true
      };
    }

    case fromExam.DELETE_EXAM_SUCCESS: {
      const examId = action.payload;
      const newContent = state.data.content.filter(e => e.id != examId);
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: newContent }
      };
    }

    case fromExam.DELETE_EXAM_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getExamsLoading = (state: ExamsState) => state.loading;
export const getExamsLoaded = (state: ExamsState) => state.loaded;
export const getExams = (state: ExamsState) => state.data.content;
export const getExamsPageable = (state: ExamsState) => state.data;
export const getExam = (state: ExamsState, id: any) =>
  state.data.content.filter(p => p.id === id)[0];
