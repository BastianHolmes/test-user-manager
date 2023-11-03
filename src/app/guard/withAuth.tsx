import { Navigate } from "react-router-dom";
import { getTokenFromCookie } from "../helpers/getToken";
import React from "react";

export const withAuth = <P extends object>(
  Component: React.ComponentType<P>
): React.ComponentType<P> => {
  const isAuthenticated = (): boolean => {
    const token = getTokenFromCookie();

    return !!token;
  };

  return (props: any) => {
    if (isAuthenticated()) {
      return <Component {...props} />;
    } else {
      return <Navigate to="/" />;
    }
  };
};
