import React from 'react'
import ExpenseItem from "./ExpenseItem"

const ExpenseList =() => {
    const expenses = [
        {id: 123, name: 'food', cost: '400'},
        {id: 123, name: 'groceries', cost: '200'},
        {id: 123, name: 'luxury', cost: '300'}
    ];
    return (
        <ul className='list-group'>
            {expenses.map((expense)=>(
                <ExpenseItem id ={expense.id} name ={expense.name} cost ={expense.cost} />
            ))}
        </ul>
    )
};

export default ExpenseList