import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import PrivateRoutes from "./PrivateRoutes";
import Signup from "./SignUp";
import Dashboard from "./Dashboard";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<PrivateRoutes component={<Dashboard />} />} />
    </Routes>
  );
};

export default Routing;
