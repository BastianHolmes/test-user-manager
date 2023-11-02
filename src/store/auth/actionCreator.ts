import { Dispatch } from "@reduxjs/toolkit";
import { loginFailure, loginStart, loginSuccess } from "./authReducer";
import login, { Credentials } from "@/app/api/login";
import { AnyAction } from "redux";

export const loginUser =
  (data: Credentials) =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      dispatch(loginStart());
      const response = await login(data);
      const token = response.data.token;
      document.cookie = `token=${token}; path=/;`;
      dispatch(loginSuccess(token));
    } catch (err: any) {
      console.log(err);
      dispatch(loginFailure(err.message));
    }
  };
