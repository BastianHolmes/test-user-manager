import { Navigate } from "react-router-dom";
import { getTokenFromCookie } from "../helpers/getToken";
import React from "react";

type ComponentType<P extends object> = React.ComponentType<P>;

export const withAuth = <P extends object>(
  Component: ComponentType<P>
): React.ComponentType<P> => {
  const isAuthenticated = (): boolean => {
    const token: string | null = getTokenFromCookie();

    return !!token;
  };

  return (props: P): JSX.Element => {
    if (isAuthenticated()) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/" />;
    }
  };
};
