import React from "react";
import { useTransactions } from "../contexts/GlobalTransactions";

const Balance = () => {
  const { transactions } = useTransactions();
  let totalAmount = 0;
  transactions.map((transaction) => {
    return (totalAmount += transaction.amount);
  });

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Your Balance</h2>
      <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
        ${totalAmount.toFixed(2)}
      </span>
    </div>
  );
};

export default Balance;
