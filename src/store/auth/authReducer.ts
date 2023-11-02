import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  token: null,
  isLoading: false,
  error: null,
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state): AuthState => {
      return {
        ...state,
        isLoading: true,
      };
    },
    loginSuccess: (state, action: PayloadAction<string>): AuthState => {
      return {
        ...state,
        isLoading: false,
        token: action.payload,
        error: null,
      };
    },
    loginFailure: (state, action: PayloadAction<string>): AuthState => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { loginStart, loginSuccess, loginFailure } = authReducer.actions;

export default authReducer.reducer;
