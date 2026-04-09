import React, { useState } from 'react'

function ExpenseForm({ expenses }) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault();

    if (!title || !amount) {
      alert("Please fill all fields")
      return;
    }

    let newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount)
    }

    expenses(newExpense)

    setTitle("")
    setAmount("")
  }

  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Expense item"
      />

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />

      <button>Add</button>
    </form>
  )
}

export default ExpenseForm