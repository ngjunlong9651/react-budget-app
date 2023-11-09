import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./Budget"
import Remaining from './Remaining';
import Spent from './Spent';
import ExpenseList from './ExpenseList';

const App = () => {
	return (
    <div className='container'>
      <h1 className='mt-3'> JL's Budget Planner </h1>
        <div className='row-mt-3'>
          <div className ='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>
          <div className='col-sm'>
            <Remaining/>
          </div>
      </div>
      <h3 className='mt-3'> Current Expenses </h3>
      <ExpenseList />
    </div>

  )
};

export default App;