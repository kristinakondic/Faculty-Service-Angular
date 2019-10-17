import * as fromProfessor from "../actions/professors.action";
import { ProfessorPageable } from "../../models/professor-pageable.model";

export interface ProfessorsState {
  data: ProfessorPageable;
  loaded: boolean;
  loading: boolean;
}

export const initialState: ProfessorsState = {
  data: { content: [], size: null },
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromProfessor.ProfessorsAction
): ProfessorsState {
  switch (action.type) {
    case fromProfessor.LOAD_PROFESSORS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromProfessor.LOAD_PROFESSORS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromProfessor.LOAD_PROFESSORS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    //add professor
    case fromProfessor.ADD_PROFESSOR: {
      return {
        ...state,
        loading: true
      };
    }

    case fromProfessor.ADD_PROFESSOR_SUCCESS: {
      const professor = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, professor] }
      };
    }

    case fromProfessor.ADD_PROFESSOR_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //edit professor
    case fromProfessor.EDIT_PROFESSOR: {
      return {
        ...state,
        loading: true
      };
    }

    case fromProfessor.EDIT_PROFESSOR_SUCCESS: {
      const professor = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, professor] }
      };
    }

    case fromProfessor.EDIT_PROFESSOR_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    //delete professor
    case fromProfessor.DELETE_PROFESSOR: {
      return {
        ...state,
        loading: true
      };
    }

    case fromProfessor.DELETE_PROFESSOR_SUCCESS: {
      const professor = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: { ...state.data, content: [...state.data.content, professor] }
      };
    }

    case fromProfessor.DELETE_PROFESSOR_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getProfessorsLoading = (state: ProfessorsState) => state.loading;
export const getProfessorsLoaded = (state: ProfessorsState) => state.loaded;
export const getProfessors = (state: ProfessorsState) => state.data.content;
export const getProfessorsPageable = (state: ProfessorsState) => state.data;
export const getProfessor = (state: ProfessorsState, id: any) =>
  state.data.content.filter(p => p.id === id)[0];
