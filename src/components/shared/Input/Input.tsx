import styles from "./Input.module.css";
import { useState } from "react";

interface InputProps {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  label: string;
  pattern?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  id,
  name,
  type,
  placeholder,
  errorMessage,
  label,
  value,
  onChange,
  pattern,
  required,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setError("");
  };

  const handleBlur = () => {
    if (required && value.trim() === "") {
      setError("This field is required!");
    } else if (pattern && !new RegExp(pattern).test(value)) {
      setError(errorMessage || "Invalid value!");
    }
  };

  return (
    <div className={styles.formInput}>
      <label className={styles.label} htmlFor={`input-${id}`}>
        {label}
      </label>
      <input
        id={`input-${id}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={styles.input}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default Input;
