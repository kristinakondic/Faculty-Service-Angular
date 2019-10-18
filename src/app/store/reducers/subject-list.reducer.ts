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

    //register exam for subject
    case fromSubject.REGISTER_EXAM_FOR_SUBJECT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromSubject.REGISTER_EXAM_FOR_SUBJECT_SUCCESS: {
      const examId = action.payload;
      let updatedData = state.data.map(subject => {
        subject["exams"] = subject["exams"].map(exam => {
          if (exam.id == examId) exam.registered = true;
          return exam;
        });
        return subject;
      });
      return {
        ...state,
        loading: false,
        loaded: true,
        data: updatedData
      };
    }

    case fromSubject.REGISTER_EXAM_FOR_SUBJECT_FAIL: {
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
