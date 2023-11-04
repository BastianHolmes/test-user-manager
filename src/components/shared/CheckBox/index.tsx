import { forwardRef, useState } from "react";
import styles from "./CheckBox.module.css";

interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, name, checked, onChange }, ref) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleCheckboxChange = () => {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onChange(newChecked);
    };

    return (
      <div className={styles.checkbox}>
        <label className={styles.label}>{label}</label>
        <input
          type="checkbox"
          name={name}
          checked={isChecked}
          onChange={handleCheckboxChange}
          ref={ref}
        />
      </div>
    );
  }
);

export default Checkbox;
