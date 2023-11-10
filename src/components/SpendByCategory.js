import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SpendingByCategory =() =>{
    const {expenses} = useContext(AppContext);

    // Calculate Spending By Category:
    const spending = expenses.reduce((acc,expense) => {
        const {category, cost} = expense;
        if (!acc[category]) {
            acc[category] = 0
        }
        acc[category] += cost;
        return acc;
    }, {}) 

    const spendingArray = Object.entries(spending); 
    return (
        <div>
            <h3>Spending By Category</h3>
            <ul className ="list-group">
                {spendingArray.map(([category, cost])=> (
                    <li key={category} className ='list-group-item d-flex justify-content-between align-items-center'>
                        {category}
                        <span className='text-dark badge badge-primary badge-pill'>
                            ${cost}
                        </span>
                    </li> 
                ))}
            </ul>
        </div>
    );
};

export default SpendingByCategory;

