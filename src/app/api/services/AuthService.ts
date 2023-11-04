import axios, { AxiosPromise } from "axios";
import { AuthResponse } from "@/models/response/AuthResponse";
import { ICredentials } from "@/models/ICredentials";

const API_URL = import.meta.env.VITE_API_URL;

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
