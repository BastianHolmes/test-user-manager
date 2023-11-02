import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import userReducer from "./user/userReducer.ts";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
