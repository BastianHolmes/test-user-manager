import { InputProps } from "@/pages/auth/ui/inputFields";

export interface ICheckboxes {
  id: number;
  label: string;
}

export const inputs: InputProps[] = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    errorMessage: "Username should be 1-150 characters and @, ., _ and - only!",
    label: "Username",
    pattern: "^[a-zA-Z0-9@.+_-]{1,150}$",
    required: true,
  },
  {
    id: 2,
    name: "first_name",
    type: "text",
    placeholder: "first name",
    errorMessage:
      "First name should have 1-150 characters and no special characters!",
    label: "First name",
    pattern: "^[a-zA-Z]{1,150}$",
    required: true,
  },
  {
    id: 3,
    name: "last_name",
    type: "text",
    placeholder: "last name",
    errorMessage:
      "Last name should have 1-150 characters and no special characters!",
    label: "Last name",
    pattern: "^[a-zA-Z]{1,150}$",
    required: true,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should include at least 1 letter, 1 capital letter and 1 number and at least 8 characters",
    label: "Password",
    pattern: "^(?=.*[A-Z])(?=.*\\d).{8,128}$",
    required: true,
  },
];

export const Checkboxes: ICheckboxes[] = [
  {
    id: 1,
    label: "is_superuser",
  },
  {
    id: 2,
    label: "is_active",
  },
];
