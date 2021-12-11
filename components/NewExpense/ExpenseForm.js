import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    const inputHandler = (event) => {
        console.log(event.target.value);
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title</lable>
          <input type="text" onChange={inputHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Amount</lable>
          <input type="number" min="0.01" step="0.01" onChange={inputHandler} />
        </div>
        <div className="new-expense__control">
          <lable>Date</lable>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
