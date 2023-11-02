import { Dispatch } from "@reduxjs/toolkit";
import { loginFailure, loginStart, loginSuccess } from "./authReducer";
import AuthService from "@/app/api/services/AuthService";
import { AnyAction } from "redux";
import { ICredentials } from "@/models/ICredentials";

export const loginUser =
  (data: ICredentials) =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      dispatch(loginStart());
      const response = await AuthService.login(data);
      const token = response.data.token;
      document.cookie = `token=${token}; path=/;`;
      dispatch(loginSuccess(token));
    } catch (err: any) {
      console.log(err);
      dispatch(loginFailure(err.message));
    }
  };
