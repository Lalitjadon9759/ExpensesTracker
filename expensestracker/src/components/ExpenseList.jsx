import React from 'react'
import ExpenseItem from './ExpenseItem'

function ExpenseList({ expenses, onDelete }) {
  return (
    <>
      {expenses.map((ele) => (
        <ExpenseItem
          key={ele.id}
          items={ele}
          deletebtn={onDelete}
        />
      ))}
    </>
  )
}

export default ExpenseList