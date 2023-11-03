import Form from "@/components/shared/Form";
import { Checkboxes, inputs } from "./inputs";
import { useAppDispatch } from "@/store";
import { IUser } from "@/models/IUser";
import { createUser } from "@/store/user/actionCreator";

const AddUserForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const AddUserDefaultValues = {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    is_superuser: false,
    is_active: false,
  };

  const handleSubmit = (user: IUser) => {
    dispatch(createUser(user));
  };

  return (
    <Form
      defaultValues={AddUserDefaultValues}
      inputs={inputs}
      checkboxes={Checkboxes}
      onSubmit={handleSubmit}
      style={{ marginTop: "2rem" }}
    />
  );
};

export default AddUserForm;
