import React from "react";
import Input from "../Input";
import { InputProps } from "@/pages/auth/ui/inputFields";

interface InputsProps {
  inputs: InputProps[];
  inputValues: any;
  handleChange: (name: string, value: string) => void;
  handleBlur: (name: string) => void;
}

const ListInput: React.FC<InputsProps> = ({
  inputs,
  inputValues,
  handleChange,
  handleBlur,
}) => {
  return (
    <>
      {inputs.map((input) => {
        const inputValue = inputValues[input.name];
        const error =
          (inputValue === "" && input.required && "This field is required!") ||
          (inputValue !== "" &&
            input.pattern &&
            !new RegExp(input.pattern).test(inputValue) &&
            (input.errorMessage || "Invalid value!"));

        return (
          <Input
            key={input.id}
            value={inputValue}
            onChange={(value: string) => handleChange(input.name, value)}
            onBlur={() => handleBlur(input.name)}
            error={error}
            {...input}
          />
        );
      })}
    </>
  );
};

export default ListInput;
