import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Form.module.css";
import { InputProps } from "@/pages/auth/ui/inputFields";
import { Credentials } from "@/app/api/login";

interface FormProps {
  defaultValues: any;
  inputs: InputProps[];
  onSubmit: (values: any) => void;
}

const Form: React.FunctionComponent<FormProps> = ({
  defaultValues,
  inputs,
  onSubmit,
}) => {
  const [inputValues, setInputValues] = useState<Credentials>(defaultValues);

  const handleChange = (name: string, value: string) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValues);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            value={inputValues[input.name]}
            onChange={(value) => handleChange(input.name, value)}
            {...input}
          />
        ))}
        <Button text="Submit" type="submit" />
      </form>
    </>
  );
};

export default Form;
