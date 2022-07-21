import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import Transactions from "./Transactions";
import AddTransaction from "./AddTransaction";

const Dashboard = () => {
  return (
    <>
      <Header />
      <Balance />
      <IncomeExpense />
      <Transactions />
      <AddTransaction />
    </>
  );
};

export default Dashboard;
