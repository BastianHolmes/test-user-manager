import axios, { AxiosPromise } from "axios";
import { API_URL } from "../instance";
import { AuthResponse } from "@/models/response/AuthResponse";
import { ICredentials } from "@/models/ICredentials";

export default class AuthService {
  static async login(credentials: ICredentials): AxiosPromise<AuthResponse> {
    try {
      const token = await axios.post(`${API_URL}/login/`, credentials);
      return token;
    } catch (err) {
      throw new Error("Failed to login");
    }
  }
}
