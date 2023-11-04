import { IUser } from "@/models/IUser";
import styles from "./UserItem.module.css";
import { useNavigate } from "react-router-dom";

interface IUserItemProps {
  user: IUser;
}

const UserItem: React.FunctionComponent<IUserItemProps> = ({ user }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/users/update/${user.id}`);
  };
  return (
    <li className={styles.user} onClick={() => handleClick()}>
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
