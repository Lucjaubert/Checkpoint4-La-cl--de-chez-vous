import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { authContext } from "./AuthContext";

function ProtectedRouteConsultant({ children }) {
  const { auth } = useContext(authContext);

  if (auth.data) {
    if (auth.data.role_id !== 2) {
      return <Navigate to="/" />;
    }
    return children;
  }
}

export default ProtectedRouteConsultant;

ProtectedRouteConsultant.propTypes = {
  children: PropTypes.element.isRequired,
};
