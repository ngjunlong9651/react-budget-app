import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget"
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpense';

const App = () => {
	return (
    <div className='container'>
      <h1 className='mt-3'> JL's Budget Planner </h1>
        <div className='row-mt-3'>
          <div className ='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
          <div className='col-sm'>
            <Remaining/>
          </div>
      </div>
      <div className='col-sm'>
        <h3 className='mt-3'> Current Expenses </h3>
        <ExpenseList />
      </div>
      <div className='col-sm'>
        <h3 className='mt-3'>Add Additional Expenses: </h3>
        <AddExpenseForm />
      </div>
    </div>

  )
};

export default App;