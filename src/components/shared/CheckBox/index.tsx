import { useState } from "react";
import styles from "./CheckBox.module.css";

interface CheckboxProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  checked,
  onChange,
}) => {
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
      />
    </div>
  );
};

export default Checkbox;
