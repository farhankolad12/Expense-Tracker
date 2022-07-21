import React from "react";
import { Navigate } from "react-router-dom";
import { useTransactions } from "../contexts/GlobalTransactions";

export default function PrivateRoutes({ component }) {
  const { currentUser } = useTransactions();

  if (currentUser !== null) {
    return component;
  } else {
    return <Navigate to={"/login"} />;
  }
}
