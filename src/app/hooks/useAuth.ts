import { useAppDispatch } from "@/store";
import { getTokenFromCookie } from "../helpers/getToken";
import { loginSuccess } from "@/store/auth/authReducer";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const token = getTokenFromCookie();
  if (token) dispatch(loginSuccess(token));
};
