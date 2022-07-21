import React from "react";
import { useTransactions } from "../contexts/GlobalTransactions";

const Transaction = ({ props }) => {
  const { deleteTransaction } = useTransactions();

  const removeTransaction = (e) => {
    console.log("CLICK");
    deleteTransaction(e);
  };

  return (
    <li
      onDoubleClick={() => removeTransaction(props.id)}
      key={props.id}
      className={props.amount > 0 ? "plus" : "minus"}
    >
      {props.text}
      <span>
        {props.amount > 0 ? "+" : ""}
        {props.amount}$
      </span>
    </li>
  );
};

export default Transaction;
