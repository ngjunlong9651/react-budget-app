
function splitBudget(totalBudget) {
  const needs = totalBudget * 0.5;
  const wants = totalBudget * 0.3;
  const savings = totalBudget * 0.2;

  return {
    needs,
    wants,
    savings
  };
}

// Example usage:
const totalBudget = 1000;
const budgetSplit = splitBudget(totalBudget);
console.log(budgetSplit);
