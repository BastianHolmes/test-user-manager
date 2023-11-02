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
}
