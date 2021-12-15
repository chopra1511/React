import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
    }

     const amountHandler = (event) => {
       setEnteredAmount(event.target.value);
     }

      const dateHandler = (event) => {
        setEnteredDate(event.target.value);
      }

      const submitHandler = (event) => {
        event.preventDefault();

        const expenses = {
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate)
        };

        console.log(expenses);
      }

  return (
    <form onSubmit={submitHandler}> 
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" min="0.01" step="0.01" onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit" >Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
