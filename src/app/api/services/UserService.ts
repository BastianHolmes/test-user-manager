import { AxiosPromise } from "axios";
import API from "../instance";
import { IUser } from "@/models/IUser";

export default class UserService {
  static async getUsers(): AxiosPromise<IUser[]> {
    try {
      const response = await API.get("/users/");
      return response;
    } catch (err) {
      throw new Error("Failed to get users");
    }
  }

  static async createUser(user: IUser): AxiosPromise<IUser> {
    try {
      const response = await API.post("/users/", user);
      return response;
    } catch (err) {
      throw new Error("Failed to create user");
    }
  }

  static async updateUser(user: IUser): AxiosPromise<IUser> {
    try {
      const response = await API.put(`/users/${user.id}`, user);
      return response;
    } catch (err) {
      throw new Error("Failed to update user");
    }
  }
}
