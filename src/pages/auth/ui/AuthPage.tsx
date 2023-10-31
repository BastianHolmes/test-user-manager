import styles from "./AuthPage.module.css";
import Form from "@/components/Form/Form";
import { inputs } from "./inputFields";

const AuthPage: React.FunctionComponent = () => {
  return (
    <div className={styles.authContainer}>
      <Form inputs={inputs} />
    </div>
  );
};

export default AuthPage;
