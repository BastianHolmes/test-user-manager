import { useSelector } from "react-redux";

export const useGetToken = () => {
  return useSelector(
    (store: { user: { token: string | null } }) => store.user.token
  );
};
