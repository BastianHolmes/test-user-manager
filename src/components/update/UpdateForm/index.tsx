import Form from "../../shared/Form";
import { Checkboxes, inputs } from "@/components/user/AddUserForm/inputs";
import Loader from "@/components/shared/Loader";
import { useDefaultValues } from "@/app/hooks/useDefaultValues";

const UpdateForm: React.FC = () => {
  const defaultValues = useDefaultValues();

  if (Object.keys(defaultValues).length === 0) {
    return <Loader />;
  }

  const onSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      inputs={inputs.slice(0, 3)}
      checkboxes={Checkboxes}
    />
  );
};

export default UpdateForm;
