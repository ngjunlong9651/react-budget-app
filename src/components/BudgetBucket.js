import React, { useState } from 'react';

function splitBudget(totalBudget) {
  const needs = totalBudget * 0.5;
  const wants = totalBudget * 0.3;
  const savings = totalBudget * 0.2;

  return {
    needs,
    wants,
    savings,
  };
}

const totalBudget = 1000; // Replace with user input

const budgetSplit = splitBudget(totalBudget);
console.log(budgetSplit);

function BudgetBucket() {
    const [totalBudget, setTotalBudget] = useState(0);
    const [budgetSplit, setBudgetSplit] = useState(null);

    const handleBudgetChange = (event) => {
        const budget = parseFloat(event.target.value);
        setTotalBudget(budget);

        const split = splitBudget(budget);
        setBudgetSplit(split);
    };

    const splitBudget = (totalBudget) => {
        const needs = totalBudget * 0.5;
        const wants = totalBudget * 0.3;
        const savings = totalBudget * 0.2;

        return {
            needs,
            wants,
            savings,
        };
    };

    return (
        <div>
            <label htmlFor="budgetInput">Enter Total Budget:</label>
            <input
                type="number"
                id="budgetInput"
                value={totalBudget}
                onChange={handleBudgetChange}
            />

            {budgetSplit && (
                <div>
                    <h2>Budget Split:</h2>
                    <p>Needs: {budgetSplit.needs}</p>
                    <p>Wants: {budgetSplit.wants}</p>
                    <p>Savings: {budgetSplit.savings}</p>
                </div>
            )}
        </div>
    );
}

export default BudgetBucket;
