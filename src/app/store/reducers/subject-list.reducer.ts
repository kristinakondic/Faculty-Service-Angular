import * as fromSubject from "../actions/subjects.action";
import { Subject } from "../../models/subject.model";

export interface SubjectsListState {
  data: Subject[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: SubjectsListState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromSubject.SubjectListAction
): SubjectsListState {
  switch (action.type) {
    //load student subject
    case fromSubject.LOAD_STUDENT_SUBJECTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubject.LOAD_STUDENT_SUBJECTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromSubject.LOAD_STUDENT_SUBJECTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //load professor subject
    case fromSubject.LOAD_PROFESSOR_SUBJECTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubject.LOAD_PROFESSOR_SUBJECTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromSubject.LOAD_PROFESSOR_SUBJECTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getAllStudentSubjects = (state: SubjectsListState) => state.data;
export const getAllProfessorSubjects = (state: SubjectsListState) => state.data;
