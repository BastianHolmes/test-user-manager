import styles from "./LoginForm.module.css";
import { Credentials } from "@/app/api/login";
import { loginUser } from "@/store/auth/actionCreator";
import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import Form from "@/components/Form/Form";
import { inputs } from "@/pages/auth/ui/inputFields";
import { useNavigate } from "react-router-dom";
import { getTokenFromCookie } from "@/app/helpers/getToken";
import { useEffect } from "react";

const LoginForm: React.FunctionComponent = ({}) => {
  const authError = useSelector((state: any) => state.auth.error);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = getTokenFromCookie();
  const defaultValues = {
    username: "test_super",
    password: "Nf<U4f<rDbtDxAPn",
  };

  useEffect(() => {
    if (token) {
      navigate("/list");
    }
  }, [token]);
  const handleLogin = (values: Credentials) => {
    dispatch(loginUser(values));
  };

  return (
    <>
      {authError && <h3 className={styles.error}>{authError}</h3>}
      <Form
        defaultValues={defaultValues}
        inputs={inputs}
        onSubmit={handleLogin}
      />
    </>
  );
};

export default LoginForm;
