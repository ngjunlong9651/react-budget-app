import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpense';
import AddBudgetForm from './components/BudgetForm';
import { AppProvider } from './context/AppContext';
import SpendingByCategory from './components/SpendByCategory';
import { auth } from './firebase_setup/firebase.js'; // Import Firebase auth

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Firebase auth state listener
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        auth.signOut();
    };

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>JL's Budget Planner</h1>
                {user ? (
                    <>
                        <button onClick={handleLogout}>Logout</button> {/* Logout button */}
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
                        <div className='row mt-3'>
                            <div className='col-sm'>
                                <SpendingByCategory />
                            </div>
                        </div>
                    </>
                ) : (
                    <div>Please log in to access the budget planner.</div>
                    // You can add a simple login form or a button to log in here
                )}
            </div>
        </AppProvider>
    );
};

export default App;
