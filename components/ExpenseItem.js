import "./ExpenseItem.css"

function ExpenseItem(props) {
   
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h1>{props.title}</h1>
        <p>{props.LocationOfExpenditure}</p>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
