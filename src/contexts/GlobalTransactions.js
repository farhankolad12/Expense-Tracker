import React, { useContext, useEffect, useState } from "react";
import auth from "../firebase";

const GlobalContext = React.createContext();

export const useTransactions = () => {
  return useContext(GlobalContext);
};

const GlobalTransactions = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  const addTransaction = (newTransaction) => {
    return setTransactions([...transactions, newTransaction]);
  };

  const signUp = (email, pass) => {
    return auth.createUserWithEmailAndPassword(email, pass);
  };

  const login = (email, pass) => {
    return auth.signInWithEmailAndPassword(email, pass);
  };

  const logout = () => {
    return auth.signOut();
  };

  const deleteTransaction = (id) => {
    return setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    transactions,
    addTransaction,
    signUp,
    login,
    logout,
    deleteTransaction,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalTransactions;
