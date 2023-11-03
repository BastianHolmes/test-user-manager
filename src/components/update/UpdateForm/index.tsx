import Form from "../../shared/Form";
import { useParams } from "react-router-dom";
import { Checkboxes, inputs } from "@/components/user/AddUserForm/inputs";
import { useLoadUsers } from "@/app/hooks/useLoadUsers";
import { useEffect, useState } from "react";
import Loader from "@/components/shared/Loader";

const UpdateForm: React.FC = () => {
  const { id } = useParams();
  const { Users } = useLoadUsers();
  const currentUser =
    Users && Users.find((user: any) => user.id === Number(id));

  const [defaultValues, setDefaultValues] = useState(currentUser ?? {});

  useEffect(() => {
    if (currentUser) {
      setDefaultValues(currentUser);
    }
  }, [currentUser, Users]);

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
