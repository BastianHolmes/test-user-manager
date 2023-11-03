import { useState } from "react";
import Button from "../Button";
import styles from "./Form.module.css";
import { InputProps } from "@/pages/auth/ui/inputFields";
import Input from "../Input";
import Checkbox from "../CheckBox";
import { ICheckboxes } from "@/components/user/AddUserForm/inputs";

interface FormProps {
  defaultValues: any;
  inputs: InputProps[];
  checkboxes?: ICheckboxes[];
  onSubmit: (values: any) => void;
  style?: React.CSSProperties;
}

const Form: React.FunctionComponent<FormProps> = ({
  defaultValues,
  inputs,
  checkboxes,
  onSubmit,
  style,
}) => {
  const [inputValues, setInputValues] = useState(defaultValues);
  const [inputValidity, setInputValidity] = useState({});

  const handleChange = (name: string, value: string | boolean) => {
    setInputValues((prevInputValues: any) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValidity) onSubmit(inputValues);
  };

  const isSubmitDisabled =
    Object.values(inputValidity).some((valid) => !valid) ||
    Object.values(inputValues).some((value) => value === "");

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} style={style}>
        {inputs.map((input) => (
          <Input
            key={input.id}
            value={inputValues[input.name]}
            onChange={(value) => handleChange(input.name, value)}
            setInputValidity={setInputValidity}
            {...input}
          />
        ))}
        <div className={styles.checkboxes}>
          {checkboxes?.map((checkbox) => (
            <Checkbox
              label={checkbox.label}
              name={checkbox.name}
              key={checkbox.id}
              checked={checkbox.value}
              onChange={(value) => handleChange(checkbox.label, value)}
            />
          ))}
        </div>
        <Button
          text="Submit"
          type="submit"
          disabled={isSubmitDisabled}
          style={{
            width: "100%",
            textAlign: "center",
          }}
        />
      </form>
    </>
  );
};

export default Form;
