import * as fromFieldsOfStudy from "../actions/fields-of-study.action";
import { FieldsOfStudy } from "../../models/fieldsOfStudy.model";

export interface FieldsOfStudyState {
  data: FieldsOfStudy[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: FieldsOfStudyState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromFieldsOfStudy.FieldsOfStudyAction
): FieldsOfStudyState {
  switch (action.type) {
    case fromFieldsOfStudy.LOAD_FIELDS_OF_STUDY: {
      return {
        ...state,
        loading: true
      };
    }

    case fromFieldsOfStudy.LOAD_FIELDS_OF_STUDY_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data: data
      };
    }

    case fromFieldsOfStudy.LOAD_FIELDS_OF_STUDY_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getFieldsOfStudyLoading = (state: FieldsOfStudyState) =>
  state.loading;
export const getFieldsOfStudyLoaded = (state: FieldsOfStudyState) =>
  state.loaded;
export const getFieldsOfStudy = (state: FieldsOfStudyState) => state.data;
