import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"

const NewExpense = (props) => {
    const [showAddForm, setShowAddForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const cancelAddFormHandler = () => {
        setShowAddForm(false)
    }

    return (
        <div className="new-expense">
            {showAddForm ? (
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onFormCancel={cancelAddFormHandler}/>
        ) : (
          <button onClick={() => setShowAddForm(true)}>Add New Expense</button>
        )
}
        </div>
    )
}
export default NewExpense