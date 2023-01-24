import "./Expenses.css"
import Card from './../UI/Card'
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
  const [selectedFilter, setSelectedFilter] = useState('2022')
  const {expenses} = props

  const onChangeFilterHandler = (filterValue) => {
    setSelectedFilter(filterValue)
  }

  const filteredExpenses = expenses.filter(expense =>  {
    const expenseDate  = expense.date.getFullYear()
    return expenseDate === parseInt(selectedFilter)
  });

  return (
      <div>
        <Card className="expenses">
          <ExpensesFilter onChangeFilter={onChangeFilterHandler} selectedFilter={selectedFilter}/>
          <ExpensesChart expenses={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
  )
}

export default Expenses