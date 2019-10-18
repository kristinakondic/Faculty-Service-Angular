import * as fromSubject from "../actions/subjects.action";
import { SubjectPageable } from "../../models/subject-pageable.model";

export interface SubjectsState {
  data: SubjectPageable;
  loaded: boolean;
  loading: boolean;
}

export const initialState: SubjectsState = {
  data: { content: [], size: null },
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromSubject.SubjectsAction
): SubjectsState {
  switch (action.type) {
    case fromSubject.LOAD_SUBJECTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubject.LOAD_SUBJECTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromSubject.LOAD_SUBJECTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //add subject
    case fromSubject.ADD_SUBJECT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubject.ADD_SUBJECT_SUCCESS: {
      const subject = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, subject] }
      };
    }

    case fromSubject.ADD_SUBJECT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //edit subject
    case fromSubject.EDIT_SUBJECT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubject.EDIT_SUBJECT_SUCCESS: {
      const subject = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, subject] }
      };
    }

    case fromSubject.EDIT_SUBJECT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //delete subject
    case fromSubject.DELETE_SUBJECT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubject.DELETE_SUBJECT_SUCCESS: {
      const subjectId = action.payload;
      const newContent = state.data.content.filter(s => s.id != subjectId);
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: newContent }
      };
    }

    case fromSubject.DELETE_SUBJECT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getSubjectsLoading = (state: SubjectsState) => state.loading;
export const getSubjectsLoaded = (state: SubjectsState) => state.loaded;
export const getSubjects = (state: SubjectsState) => state.data.content;
export const getSubjectsPageable = (state: SubjectsState) => state.data;
export const getSubject = (state: SubjectsState, id: any) =>
  state.data.content.filter(p => p.id === id)[0];
