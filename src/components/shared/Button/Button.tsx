import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  type,
  style,
  onClick,
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      style={{ ...style }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
