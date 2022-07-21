import React from "react";
import { useTransactions } from "../contexts/GlobalTransactions";
import Transaction from "./Transaction";

const Transactions = () => {
  const { transactions } = useTransactions();

  return (
    <div className="transactions-body" style={{ marginTop: "2rem" }}>
      <h3 style={{ borderBottom: "1px solid gray", paddingBottom: "1rem" }}>
        History
      </h3>
      <p>Double Click To Delete The Transaction</p>
      <ul className="transaction">
        {transactions &&
          transactions.map((transaction) => {
            return <Transaction key={transaction.id} props={transaction} />;
          })}
      </ul>
    </div>
  );
};

export default Transactions;
