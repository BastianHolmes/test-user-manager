import { useLoadUsers } from "@/app/hooks/useLoadUsers";
import styles from "./ListPage.module.css";
import { useAuth } from "@/app/hooks/useAuth";
import UserList from "@/components/user/UserList/UserList";
import Button from "@/components/shared/Button";
import { useState } from "react";
import AddUserForm from "@/components/user/AddUserForm";
import Pagination from "@/components/shared/Pagination";
import { withAuth } from "@/app/guard/withAuth";
import SearchUser from "@/components/user/SearchUser";

const ListPage: React.FC = () => {
  useAuth();
  const { Users } = useLoadUsers();

  const [addUser, setAddUser] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(1);

  //Sets items per page for pagination
  const itemsPerPage = 4;

  const indexOfFirstProject = (currentPage - 1) * itemsPerPage;
  const indexOfLastProject = indexOfFirstProject + itemsPerPage;
  const users = Array.isArray(Users)
    ? Users.slice(indexOfFirstProject, indexOfLastProject)
    : [];

  const totalPages = Math.ceil(Users.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleClick = () => {
    setAddUser(!addUser);
  };

  return (
    <>
      <div className={styles.listPageContainer}>
        <Button
          style={{
            width: "25rem",
            color: addUser ? "red" : "var(--secondary-color)",
            border: `1px solid ${addUser ? "red" : "var(--secondary-color)"}`,
            marginBottom: "2rem",
          }}
          text={addUser ? "Close" : "Add User"}
          type="button"
          onClick={handleClick}
        />
        {addUser ? (
          <AddUserForm setAddUser={setAddUser}/>
        ) : (
          <>
            <SearchUser users={Users} />
            <UserList users={users} />
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default withAuth(ListPage);
