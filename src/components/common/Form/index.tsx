import Button from "../Button";
import styles from "./Form.module.css";
import { InputProps } from "@/pages/auth/ui/AuthPage/inputFields";
import { ICheckboxes } from "@/components/user/AddUserForm/inputs";
import { useState } from "react";
import ListInput from "../ListInput";
import ListCheckbox from "../ListCheckbox";

interface FormProps<T> {
  defaultValues: T;
  inputs: InputProps[];
  checkboxes?: ICheckboxes[];
  onSubmit: (values: T) => void;
  style?: React.CSSProperties;
  btnText: string;
}

const Form = <T extends Record<string, string | boolean>>({
  defaultValues,
  inputs,
  checkboxes,
  onSubmit,
  style,
  btnText = "Submit",
}: FormProps<T>) => {
  const [inputValues, setInputValues] = useState<T>(defaultValues);
  const [inputValidity, setInputValidity] = useState<Record<string, boolean>>(
    {}
  );
  const [isFormTouched, setIsFormTouched] = useState(false);

  const handleChange = (name: string, value: string | boolean): void => {
    setIsFormTouched(true);
    setInputValues((prevInputValues: T) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleBlur = (name: string): void => {
    const input = inputs.find((input) => input.name === name);
    const required = input?.required;
    const pattern = input?.pattern;
    const inputValue = inputValues[name];

    const isValid =
      (required &&
        typeof inputValue === "string" &&
        inputValue.trim() === "") ||
      (pattern &&
        typeof inputValue === "string" &&
        !new RegExp(pattern).test(inputValue));

    setInputValidity((prevInputValidity: Record<string, boolean>) => ({
      ...prevInputValidity,
      [name]: !isValid,
    }));
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (Object.values(inputValidity).every((valid) => valid))
      onSubmit(inputValues);
  };

  const isSubmitDisabled =
    !isFormTouched ||
    Object.values(inputValidity).some((valid) => !valid) ||
    Object.values(inputValues).some((value) => value === "");

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit} style={style}>
        <ListInput
          inputs={inputs}
          inputValues={inputValues}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        <div className={styles.checkboxes}>
          <ListCheckbox
            checkboxes={checkboxes ?? []}
            handleChange={handleChange}
          />
        </div>
        <Button
          text={btnText}
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
