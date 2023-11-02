import { IUser } from "@/models/IUser";
import { useAppDispatch } from "@/store";
import { loadUsers } from "@/store/user/actionCreator";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useLoadUsers = () => {
  const dispatch = useAppDispatch();
  const Users: IUser[] = useSelector(
    (state: { user: { users: IUser[] } }) => state.user.users
  );

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return { Users };
};
