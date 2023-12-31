import { startTransition } from "react";
import styles from "./UpdatePage.module.css";
import { useAuth } from "@/app/hooks/useAuth";
import UpdateForm from "@/pages/update/ui/UpdateForm";
import { withAuth } from "@/app/guard/withAuth";

const UpdatePage: React.FunctionComponent = () => {
  startTransition(() => {
    useAuth();
  });
  return (
    <div className={styles.UpdatePageContainer}>
      <UpdateForm />
    </div>
  );
};

export default withAuth(UpdatePage);
