import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  authData: {
    token: string | null;
    isLoading: boolean;
    error: string | null;
  };
  userData: {
    users: object[];
    isLoading: boolean;
    error: string | null;
  };
}

export const initialState: AuthState = {
  authData: {
    token: null,
    isLoading: false,
    error: null,
  },
  userData: {
    users: [],
    isLoading: false,
    error: null,
  },
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state): AuthState => {
      return {
        ...state,
        authData: {
          ...state.authData,
          isLoading: true,
        },
      };
    },
    loginSuccess: (state, action: PayloadAction<string>): AuthState => {
      return {
        ...state,
        authData: {
          ...state.authData,
          isLoading: false,
          token: action.payload,
          error: null,
        },
      };
    },
    loginFailure: (state, action: PayloadAction<string>): AuthState => {
      return {
        ...state,
        authData: {
          ...state.authData,
          isLoading: false,
          error: action.payload,
        },
      };
    },
    loadUsersStart: (state): AuthState => {
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoading: true,
        },
      };
    },
    loadUsersSuccess: (state, action: PayloadAction<object[]>): AuthState => {
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoading: false,
          users: action.payload,
          error: null,
        },
      };
    },
    loadUsersFailure: (state, action: PayloadAction<string>): AuthState => {
      return {
        ...state,
        userData: {
          ...state.userData,
          isLoading: false,
          error: action.payload,
        },
      };
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  loadUsersStart,
  loadUsersSuccess,
  loadUsersFailure,
} = authReducer.actions;

export default authReducer.reducer;
