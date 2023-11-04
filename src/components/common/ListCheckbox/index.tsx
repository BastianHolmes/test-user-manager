import { ICheckboxes } from "@/components/user/AddUserForm/inputs";
import Checkbox from "../CheckBox";

interface ListCheckboxes {
  checkboxes: ICheckboxes[];
  handleChange: (name: string, value: boolean) => void;
}

const ListCheckbox: React.FC<ListCheckboxes> = ({
  checkboxes,
  handleChange,
}) => {
  return (
    <>
      {checkboxes?.map((checkbox) => (
        <Checkbox
          label={checkbox.label}
          name={checkbox.name}
          key={checkbox.id}
          checked={checkbox.value}
          onChange={(value) => handleChange(checkbox.label, value)}
        />
      ))}
    </>
  );
};

export default ListCheckbox;
