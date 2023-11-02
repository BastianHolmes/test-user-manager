import Form from "@/components/shared/Form/Form";
import * as React from "react";
import { inputs } from "./inputs";

const AddUserForm: React.FC = () => {
  const AddUserDefaultValues = {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    role: "user",
  };
  return (
    <Form
      defaultValues={AddUserDefaultValues}
      inputs={inputs}
      onSubmit={() => {}}
    />
  );
};

export default AddUserForm;
