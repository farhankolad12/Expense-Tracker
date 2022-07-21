import React, { useState } from "react";
import { useTransactions } from "../contexts/GlobalTransactions";

const AddTransaction = () => {
  const [message, setMessage] = useState("");
  const { addTransaction } = useTransactions();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    const amount = e.target[1].value;

    if (text === "" || amount === "") {
      return setMessage("Fill Out Details!");
    }

    setMessage("");

    const newTransaction = {
      id: Math.floor(Math.random() * 100000) + 1,
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);

    e.target.reset();
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <h3 style={{ paddingBottom: "1rem", borderBottom: "1px solid gray" }}>
        Add New Transaction
      </h3>
      <p className={message ? "error" : ""}>{message}</p>
      <form className="transaction-form" onSubmit={handleSubmit}>
        <label htmlFor="text">Text</label>
        <input type={"text"} id="text" placeholder="Enter Text" />
        <label htmlFor="amount">
          Amount <br /> (negative - Expense, positive - Income)
        </label>
        <input type={"number"} id="amount" placeholder="Enter Amount" />
        <button type="submit" className="add-transaction">
          Add New Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
