import { IUser } from "@/models/IUser";
import styles from "./UserList.module.css";
import UserItem from "../UserItem";
import Loader from "@/components/common/Loader";

interface IUserListProps {
  users: IUser[];
}

const UserList: React.FunctionComponent<IUserListProps> = ({ users }) => {
  return (
    <ul className={styles.userList}>
      {users.length === 0 ? (
        <Loader />
      ) : (
        users.map((user) => <UserItem key={user.id} user={user} />)
      )}
    </ul>
  );
};

export default UserList;
