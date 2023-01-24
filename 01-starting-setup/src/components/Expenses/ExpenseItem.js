import { useState } from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from './../UI/Card'
function ExpenseItem(props) {
   const [expenseTitle, setExpenseTitle] = useState(props.title)
    const expenseAmount = props.amount;

    const clickHandler = () => {
        setExpenseTitle("Updated!")
    }
    return (
        <li>
            <Card className="expense-item">
            <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{expenseTitle}</h2>
                    <div className="expense-item__price">{expenseAmount}</div>
                </div>
                <button  onClick={clickHandler}>Change Title</button>
            </Card>
      </li>
      )
}

export default ExpenseItem;