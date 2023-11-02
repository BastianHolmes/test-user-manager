import { IUser } from "@/models/IUser";
import styles from "./UserList.module.css";

interface IUserListProps {
  users: IUser[];
}

const UserList: React.FunctionComponent<IUserListProps> = ({ users }) => {
  return (
    <ul className={styles.userList}>
      {users && users.map((user) => <li key={user.id}>{user.username}</li>)}
    </ul>
  );
};

export default UserList;
