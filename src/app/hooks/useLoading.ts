import { useSelector } from "react-redux";

export const useLoading = () => {
  return useSelector(
    (store: { user: { isLoading: boolean } }) => store.user.isLoading
  );
};
