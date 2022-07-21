import React from "react";
import { useTransactions } from "../contexts/GlobalTransactions";

const Header = () => {
  const { currentUser, logout } = useTransactions();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <h2>Welcome {currentUser && currentUser.email}</h2>
      <span>
        Not <b>{currentUser && currentUser.email}</b>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={handleLogout}>Logout</button>
      </span>
    </header>
  );
};

export default Header;
