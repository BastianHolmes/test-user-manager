import { Navigate, RouteObject } from "react-router-dom";

import ErrorPage from "./error";
import AuthPage from "./auth";
import UpdatePage from "./update";
import ListPage from "./list";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    element: <ListPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list/update/:id",
    element: <UpdatePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
