import Form from "../../shared/Form";
import { Checkboxes, inputs } from "@/components/user/AddUserForm/inputs";
import Loader from "@/components/shared/Loader";
import { useDefaultValues } from "@/app/hooks/useDefaultValues";
import { useAppDispatch } from "@/store";
import { updateUser } from "@/store/user/actionCreator";
import { useNavigate } from "react-router-dom";

const UpdateForm: React.FC = () => {
  const defaultValues = useDefaultValues();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (Object.keys(defaultValues).length === 0) {
    return <Loader />;
  }

  const onSubmit = (values: any) => {
    dispatch(updateUser(values));
    navigate("/users/list");
  };
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      inputs={inputs}
      checkboxes={Checkboxes}
    />
  );
};

export default UpdateForm;
