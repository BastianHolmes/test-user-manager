import styles from "./LoginForm.module.css";
import { loginUser } from "@/store/auth/actionCreator";
import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import Form from "@/components/shared/Form";
import { inputs } from "@/pages/auth/ui/inputFields";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ICredentials } from "@/models/ICredentials";

const LoginForm: React.FunctionComponent = ({}) => {
  const authError = useSelector((state: any) => state.auth.error);
  const token = useSelector((state: any) => state.auth.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultValues = {
    username: "test_super",
    password: "Nf<U4f<rDbtDxAPn",
  };

  useEffect(() => {
    if (token !== null) {
      navigate("/list");
    }
  }, [token]);
  const handleLogin = (values: ICredentials) => {
    dispatch(loginUser(values));
  };

  return (
    <>
      {authError && (
        <h3 style={{ color: "var(--secondary-color)" }}>{authError}</h3>
      )}
      <Form
        defaultValues={defaultValues}
        inputs={inputs}
        onSubmit={handleLogin}
      />
    </>
  );
};

export default LoginForm;
