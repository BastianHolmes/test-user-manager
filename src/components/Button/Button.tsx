import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}

const Button: React.FunctionComponent<ButtonProps> = ({ text, type }) => {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
};

export default Button;
