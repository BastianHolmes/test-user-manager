import Form from "@/components/common/Form";
import { Checkboxes, inputs } from "./inputs";
import { useAppDispatch } from "@/store";
import { IUser } from "@/models/IUser";
import { createUser } from "@/store/user/actionCreator";

interface AddUserFormProps {
  setAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ setAddUser }) => {
  const dispatch = useAppDispatch();
  const AddUserDefaultValues = {
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    is_superuser: false,
    is_active: false,
    last_login: "_",
  };

  const handleSubmit = (values: IUser) => {
    dispatch(createUser(values));
    setAddUser(false);
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
