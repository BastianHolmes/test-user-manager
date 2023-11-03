import { AnyAction, createAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import {
  createUserFailure,
  createUserSuccess,
  loadUsersFailure,
  loadUsersStart,
  loadUsersSuccess,
} from "./userReducer";
import UserService from "@/app/api/services/UserService";
import { IUser } from "@/models/IUser";

export const createUserAction = createAction<IUser>("user/createUserStart");
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

export const createUser =
  (user: IUser) =>
  async (dispatch: Dispatch<AnyAction>): Promise<void> => {
    try {
      dispatch(createUserAction(user));
      const response = await UserService.createUser(user);
      dispatch(createUserSuccess(response.data));
    } catch (err: any) {
      console.log(err);
      dispatch(createUserFailure(err.message));
    }
  };
