import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import {
  loadUsersFailure,
  loadUsersStart,
  loadUsersSuccess,
} from "./userReducer";
import UserService from "@/app/api/services/UserService";

export const loadUsers =
  () =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      dispatch(loadUsersStart());
      const response = await UserService.getUsers();
      dispatch(loadUsersSuccess(response.data));
    } catch (err: any) {
      console.log(err);
      dispatch(loadUsersFailure(err.message));
    }
  };
