import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Form.module.css";
import { InputProps } from "@/pages/auth/ui/inputFields";

interface InputValue {
  [name: string]: string;
}

interface FormProps {
  inputs: InputProps[];
}

const Form: React.FunctionComponent<FormProps> = ({ inputs }) => {
  const [inputValues, setInputValues] = useState<InputValue>({
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
