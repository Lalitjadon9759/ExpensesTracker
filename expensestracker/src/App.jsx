import { useEffect, useState } from 'react'
import './App.css'

import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState(() => {
    let newdata = localStorage.getItem("expenses");
    return newdata ? JSON.parse(newdata) : [];
  })

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  const addExpenses = (expense) => {
    setExpenses((prev) => [...prev, expense])
  }

  const deleteExpenses = (uid) => {
    const newdata = expenses.filter((ele) => ele.id !== uid)
    setExpenses(newdata)
  }

  const totalamount = expenses.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0)

  return (
    <>
      <h1>Expense Tracker</h1>

      <ExpenseForm expenses={addExpenses} />

      <div className="total">
        Total expenses amount: ${totalamount}
      </div>

      <div className="expense-list">
        <ExpenseList expenses={expenses} onDelete={deleteExpenses} />
      </div>
    </>
  )
}

export default App