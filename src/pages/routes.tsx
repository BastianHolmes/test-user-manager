import { Navigate, RouteObject } from "react-router-dom";
import { lazy } from "react";
import { withAuth } from "@/app/guard/withAuth";

import ErrorPage from "./error";
import AuthPage from "./auth";

const UpdatePage = withAuth(lazy(() => import("./update")));
const ListPage = withAuth(lazy(() => import("./list")));

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
