import styles from "./ListPage.module.css";
import { useAuth } from "@/app/hooks/useAuth";

const ListPage: React.FunctionComponent = () => {
  useAuth();
  return <div className={styles.listPageContainer}>ListPage</div>;
};

export default ListPage;
