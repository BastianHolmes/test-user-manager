import API from "./api";

export interface Credentials {
  [key: string]: string;
  username: string;
  password: string;
}

const login = async (credentials: Credentials) => {
  try {
    console.log(credentials);
    const token = await API.post("/login/", {
      username: credentials.username,
      password: credentials.password,
    });
    console.log(credentials);
    console.log(token);
    return token;
  } catch (err) {
    throw new Error("Failed to login");
  }
};

export default login;
