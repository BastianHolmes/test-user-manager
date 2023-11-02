import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
  users: object[];
  isLoading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUsersStart: (state): UserState => {
      return {
        ...state,
        isLoading: true,
      };
    },
    loadUsersSuccess: (state, action: PayloadAction<object[]>): UserState => {
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: null,
      };
    },
    loadUsersFailure: (state, action: PayloadAction<string>): UserState => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { loadUsersStart, loadUsersSuccess, loadUsersFailure } =
  userReducer.actions;

export default userReducer.reducer;
