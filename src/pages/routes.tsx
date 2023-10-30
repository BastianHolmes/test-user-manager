import { Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";

import ErrorPage from "./error";
import AuthPage from "./auth";

const UpdatePage = lazy(() => import("./update"));
const ListPage = lazy(() => import("./list"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AuthPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    element: <ListPage />,
  },
  {
    path: "/list/update/:id",
    element: <UpdatePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
