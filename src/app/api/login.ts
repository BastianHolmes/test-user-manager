import { AxiosPromise } from "axios";
import API from "./api";
import { ILoginResponse } from "@/store/auth/types";

export interface Credentials {
  [key: string]: string;
  username: string;
  password: string;
}

const login = async (credentials: Credentials):AxiosPromise<ILoginResponse> => {
  try {
    console.log(credentials);
    const token = await API.post("/login/", credentials);
    console.log(credentials);
    console.log(token);
    return token;
  } catch (err) {
    throw new Error("Failed to login");
  }
};

export default login;
