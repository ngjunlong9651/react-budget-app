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
import { auth } from './firebase_setup/firebase'; // Import Firebase auth
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import for Google Auth

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

    // Define handleGoogleLogin inside the App component
    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error signing in with Google", error);
        }
    };

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
                    <div>
                        <button onClick={handleGoogleLogin}>Login with Google</button>
                    </div>
                )}
            </div>
        </AppProvider>
    );
};

export default App;
