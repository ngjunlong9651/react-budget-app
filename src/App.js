import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget"
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpense';
import AddBudgetForm from './components/BudgetForm';
import { AppProvider } from './context/AppContext';
import SpendingByCategory from './components/SpendByCategory';
import Login from './components/Login';
import Logout from './components/Logout';


const App = () => {
	const google = window.google;
	
	return (
		<AppProvider>
			<div className='container'>
				<h1 className='mt-3'>JL's Budget Planner</h1>
				<h2 className='mt-3'> Edit Budget 💵 </h2>
					<AddBudgetForm />
				<div className='row mt-3'>
					<div className='col-sm'>
						<Budget />
					</div>
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
					<div className='col-sm'>
						<Remaining />
					</div>
				</div>
				<h3 className='mt-3'>Expenses</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add Expense</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddExpenseForm />
					</div>
				</div>
				<div className ='row mt-3'>
					<div className='col-sm'>
						<SpendingByCategory />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};


export default App;