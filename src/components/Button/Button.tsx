import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({ text, onSubmit }) => {
  return (
    <button className={styles.button} onClick={(e) => onSubmit(e)}>
      {text}
    </button>
  );
};

export default Button;
