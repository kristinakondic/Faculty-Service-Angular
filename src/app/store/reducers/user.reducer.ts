import * as fromUser from "../actions/user.action";
import { User } from "../../models/user.model";

export interface UserState {
  data: User;
  error: boolean;
  loading: boolean;
}

export const initialState: UserState = {
  data: {
    id: null,
    name: null,
    surname: null,
    address: null,
    identityNo: null,
    email: null,
    role: null
  },
  error: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromUser.UserAction
): UserState {
  switch (action.type) {
    case fromUser.LOAD_USER: {
      return {
        ...state,
        loading: true
      };
    }

    case fromUser.LOAD_USER_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        data
      };
    }

    case fromUser.LOAD_USER_FAIL: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    //change password
    case fromUser.CHANGE_PASSWORD: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }

    case fromUser.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false
      };
    }

    case fromUser.CHANGE_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
  }

  return state;
}

export const getUserLoading = (state: UserState) => state.loading;
export const getUserError = (state: UserState) => state.error;
export const getUser = (state: UserState) => state.data;
