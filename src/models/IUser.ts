export interface IUser {
  readonly id: number;
  username: string;
  first_name: string;
  last_name: string;
  password: string;
  is_active: boolean;
  readonly last_login: string;
  is_superuser: boolean;
}