import { useLoadUsers } from "@/app/hooks/useLoadUsers";
import styles from "./ListPage.module.css";
import { useAuth } from "@/app/hooks/useAuth";
import Button from "@/components/common/Button";
import { useState } from "react";
import AddUserForm from "@/components/user/AddUserForm";
import { withAuth } from "@/app/guard/withAuth";
import ListContent from "../ListContent";

const ListPage: React.FC = () => {
  useAuth();
  const { Users } = useLoadUsers();

  const [addUser, setAddUser] = useState(false);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  const handleClick = () => {
    setAddUser(!addUser);
  };

  return (
    <>
      <div className={styles.listPageContainer}>
        {!addUser && (
          <Button
            style={{
              width: "25rem",
              color: "var(--tertiary-color)",
              border: `1px solid var(--tertiary-color)`,
              marginBottom: "2rem",
            }}
            text="Logout"
            type="button"
            onClick={handleLogout}
          />
        )}
        <Button
          style={{
            width: addUser ? "50%" : "25rem",
            color: addUser ? "red" : "var(--secondary-color)",
            border: `1px solid ${addUser ? "red" : "var(--secondary-color)"}`,
            marginBottom: "2rem",
          }}
          text={addUser ? "Close" : "Add User"}
          type="button"
          onClick={handleClick}
        />
        {addUser ? (
          <AddUserForm setAddUser={setAddUser} />
        ) : (
          <ListContent addUser={addUser} Users={Users} />
        )}
      </div>
    </>
  );
};

export default withAuth(ListPage);
