import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
    return (
        <div className="expense-item__description">
        <h1>{props.title}</h1>
        <p>{props.LocationOfExpenditure}</p>
        <div className="expense-item__price">$ {props.amount}</div>
        </div>
    );
   
}

export default ExpenseDetails;