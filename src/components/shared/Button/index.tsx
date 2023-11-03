import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset" | undefined;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  type,
  style,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={styles.button}
      type={type}
      style={{ ...style }}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
