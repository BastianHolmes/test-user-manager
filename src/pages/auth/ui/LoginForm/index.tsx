import { loginUser } from "@/store/auth/actionCreator";
import { useAppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import Form from "@/components/common/Form";
import { inputs } from "@/pages/auth/ui/AuthPage/inputFields";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FormValues } from "@/models/ICredentials";

const defaultValues: FormValues = {
  username: "test_super",
  password: "Nf<U4f<rDbtDxAPn",
};

const LoginForm: React.FunctionComponent = (): JSX.Element => {
  const authError = useSelector((state: RootState) => state.auth.error);
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/users/list");
    }
  }, [token]);

  const handleLogin = (values: FormValues): void => {
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
