import { useLoadUsers } from "@/app/hooks/useLoadUsers";
import styles from "./ListPage.module.css";
import { useAuth } from "@/app/hooks/useAuth";
import UserList from "@/components/user/UserList/UserList";
import Button from "@/components/shared/Button/Button";
import { useState } from "react";
import AddUserForm from "@/components/user/AddUserForm";

const ListPage: React.FC = ({}) => {
  useAuth();
  const { Users } = useLoadUsers();
  const [addUser, setAddUser] = useState(false);
  const handleClick = () => {
    setAddUser(!addUser);
  };

  return (
    <>
      <div className={styles.listPageContainer}>
        <Button
          style={{
            width: "25rem",
            color: "var(--secondary-color)",
            border: "1px solid var(--secondary-color)",
          }}
          text="Add User"
          type="button"
          onClick={handleClick}
        />
        {addUser ? <AddUserForm /> : <UserList users={Users} />}
      </div>
    </>
  );
};

export default ListPage;
