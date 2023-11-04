import Form from "../../../../components/common/Form";
import { Checkboxes, inputs } from "@/components/user/AddUserForm/inputs";
import Loader from "@/components/common/Loader";
import { useDefaultValues } from "@/app/hooks/useDefaultValues";
import { useAppDispatch } from "@/store";
import { updateUser } from "@/store/user/actionCreator";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";

const UpdateForm: React.FC = () => {
  const defaultValues = useDefaultValues();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (Object.keys(defaultValues).length === 0) {
    return <Loader />;
  }

  const onSubmit = (values: Record<string, string | boolean>) => {
    if (values.password) {
      dispatch(
        updateUser(
          values as {
            username: string;
            is_active: boolean;
            is_superuser: boolean;
            first_name: string;
            last_name: string;
            last_login: string;
            password: string;
          }
        )
      );
      navigate("/users/list");
    }
  };
  return (
    <>
      <Button
        text="Close"
        type="button"
        style={{ width: "50%", color: "red", marginBottom: "2rem" }}
        onClick={() => navigate("/users/list")}
      />
      <Form
        btnText="Save changes"
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        inputs={inputs}
        checkboxes={Checkboxes}
      />
    </>
  );
};

export default UpdateForm;
