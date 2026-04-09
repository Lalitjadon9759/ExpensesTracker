import React from 'react'

function ExpenseItem({ items, deletebtn }) {
  return (
    <div className="expense-item">
      <span>{items.title}</span>
      <h3>${items.amount}</h3>

      <button
        className="delete-btn"
        onClick={() => deletebtn(items.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default ExpenseItem