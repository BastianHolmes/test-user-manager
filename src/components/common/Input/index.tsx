import styles from "./Input.module.css";
import { ChangeEvent, forwardRef } from "react";

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
  onBlur: () => void;
  error: string | boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, name, type, placeholder, label, value, onChange, onBlur, error },
    ref
  ) => {
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
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onChange(event.target.value)
          }
          onBlur={onBlur}
          className={styles.input}
          ref={ref}
        />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }
);

export default Input;
