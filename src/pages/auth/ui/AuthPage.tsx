import styles from "./AuthPage.module.css";
import Form from "@/components/Form/Form";
import { inputs } from "./inputFields";
import login from "@/api/login";

const AuthPage: React.FunctionComponent = () => {
  return (
    <div className={styles.authContainer}>
      <Form inputs={inputs} login={login} />
    </div>
  );
};

export default AuthPage;
