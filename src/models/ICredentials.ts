export interface ICredentials {
  username: string;
  password: string;
}

export interface FormValues extends ICredentials {
  [key: string]: string | boolean;
}
