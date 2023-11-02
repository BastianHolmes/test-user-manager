import { useLoadUsers } from "@/app/hooks/useLoadUsers";
import styles from "./ListPage.module.css";
import { useAuth } from "@/app/hooks/useAuth";
import UserList from "@/components/user/UserList/UserList";

const ListPage: React.FC = () => {
  const Users = useLoadUsers();
  useAuth();
  return (
    <div className={styles.listPageContainer}>
      <UserList users={Users} />
    </div>
  );
};

export default ListPage;
