import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItem.js";
import Card from "./components/UI/Card.js";
import NewExpense from "./components/NewExpense/NewExpense";

const expense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    LocationOfExpenditure: "Italy",
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    LocationOfExpenditure: "Italy",
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    LocationOfExpenditure: "Paris",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    LocationOfExpenditure: "London",
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(expense);

  const appExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAppExpense={appExpenseHandler} />
      <Card>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            LocationOfExpenditure={expense.LocationOfExpenditure}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default App;
