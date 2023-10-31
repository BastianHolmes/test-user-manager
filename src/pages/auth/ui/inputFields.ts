export interface InputProps {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  label: string;
  pattern: string;
  required: boolean;
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
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should include at least 1 letter, 1 capital letter and 1 number and at least 8 characters",
    label: "Password",
    pattern: "^(?=.*[A-Z])(?=.*\\d).{8,}$",
    required: true,
  },
];
