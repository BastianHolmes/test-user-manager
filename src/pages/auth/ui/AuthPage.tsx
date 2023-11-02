import styles from "./AuthPage.module.css";
import LoginForm from "@/components/auth/LoginForm/LoginForm";

const AuthPage: React.FunctionComponent = () => {
  return (
    <div className={styles.authContainer}>
      <LoginForm />
    </div>
  );
};

export default AuthPage;
