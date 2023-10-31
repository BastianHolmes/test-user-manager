import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Form.module.css";
import { InputProps } from "@/pages/auth/ui/inputFields";
import { Credentials } from "@/api/login";

interface FormProps {
  inputs: InputProps[];
  login: (obj: Credentials) => void;
}

const Form: React.FunctionComponent<FormProps> = ({ inputs, login }) => {
  const [inputValues, setInputValues] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleChange = (name: string, value: string) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(inputValues);
  };

  return (
    <form className={styles.form}>
      {inputs.map((input) => (
        <Input
          key={input.id}
          value={inputValues[input.name]}
          onChange={(value) => handleChange(input.name, value)}
          {...input}
        />
      ))}
      <Button text="Submit" onSubmit={handleSubmit} />
    </form>
  );
};

export default Form;
