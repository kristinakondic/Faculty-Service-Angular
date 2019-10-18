import * as fromStudent from "../actions/students.action";
import { StudentPageable } from "../../models/student-pageable.model";

export interface StudentsState {
  data: StudentPageable;
  loaded: boolean;
  loading: boolean;
}

export const initialState: StudentsState = {
  data: { content: [], size: null },
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromStudent.StudentsAction
): StudentsState {
  switch (action.type) {
    case fromStudent.LOAD_STUDENTS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromStudent.LOAD_STUDENTS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromStudent.LOAD_STUDENTS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    //add student
    case fromStudent.ADD_STUDENT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromStudent.ADD_STUDENT_SUCCESS: {
      const student = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, student] }
      };
    }

    case fromStudent.ADD_STUDENT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //edit student
    case fromStudent.EDIT_STUDENT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromStudent.EDIT_STUDENT_SUCCESS: {
      const student = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, student] }
      };
    }

    case fromStudent.EDIT_STUDENT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //delete student
    case fromStudent.DELETE_STUDENT: {
      return {
        ...state,
        loading: true
      };
    }

    case fromStudent.DELETE_STUDENT_SUCCESS: {
      const studentId = action.payload;
      const newContent = state.data.content.filter(s => s.id != studentId);
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: newContent }
      };
    }

    case fromStudent.DELETE_STUDENT_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getStudentsLoading = (state: StudentsState) => state.loading;
export const getStudentsLoaded = (state: StudentsState) => state.loaded;
export const getStudents = (state: StudentsState) => state.data.content;
export const getStudentsPageable = (state: StudentsState) => state.data;
export const getStudent = (state: StudentsState, id: any) =>
  state.data.content.filter(p => p.id === id)[0];
