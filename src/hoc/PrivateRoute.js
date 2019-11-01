import React from "react";
import { Route, Redirect } from "react-router-dom";

import { getTokenFromLocalStorage } from "../utils";

const PrivateRoute = ({ render: RouteComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!getTokenFromLocalStorage() ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
