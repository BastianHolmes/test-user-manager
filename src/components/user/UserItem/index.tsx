import { IUser } from "@/models/IUser";
import styles from "./UserItem.module.css";

interface IUserItemProps {
  user: IUser;
}

const UserItem: React.FunctionComponent<IUserItemProps> = ({ user }) => {
  return (
    <li className={styles.user}>
      <div className={styles.id}>{user.id}</div>
      <div className={styles.username}>
        {user.username}
        <span className={styles.name}>
          ({user.first_name + " " + user.last_name})
        </span>
      </div>
      <div className={styles.last_login}>{user.last_login || "-"}</div>
    </li>
  );
};

export default UserItem;
