import React from "react";
import { useTransactions } from "../contexts/GlobalTransactions";

const IncomeExpense = () => {
  const { transactions } = useTransactions();
  let incomeAmount = 0;
  let expenseAmount = 0;

  transactions.map((transaction) => {
    if (transaction.amount > 0) {
      return (incomeAmount += transaction.amount);
    } else {
      return (expenseAmount += transaction.amount);
    }
  });

  return (
    <div className="income-expense">
      <div className="income">
        <p
          style={{
            fontSize: "1rem",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          income
        </p>
        <span style={{ color: "orange", fontSize: "1.2rem" }}>
          {incomeAmount.toFixed(2)}
        </span>
      </div>
      <div
        style={{
          border: "1px solid gray",
          height: "3rem",
          backgroundColor: "gray",
        }}
      ></div>
      <div className="expense">
        <p
          style={{
            fontSize: "1rem",
            textTransform: "uppercase",
            fontWeight: "bold",
          }}
        >
          expense
        </p>
        <span style={{ color: "red", fontSize: "1.2rem" }}>
          {Math.abs(expenseAmount).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default IncomeExpense;
