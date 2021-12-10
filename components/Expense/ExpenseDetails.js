import React, {useState} from "react";
import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
    const [amount, setAmount] = useState(props.amount);
    const updateHandler = () => {
      setAmount("100");
      console.log(amount);
    };
  return (
    <div className="expense-item__description">
      <h1>{props.title}</h1>
      <p>{props.LocationOfExpenditure}</p>
      <div className="expense-item__price">$ {amount}</div>
      <button onClick={updateHandler}>Update me</button>
    </div>
  );
};

export default ExpenseDetails;
