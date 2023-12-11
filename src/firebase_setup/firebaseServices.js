import Budget from '../components/Budget';
import {db} from './firebase';
import {collection, addDoc} from 'firebase/firestore';

export const addUser = async (user) => {
    try{
        await addDoc(collection(db, 'users'), user);
    } catch (error) {
        console.error('Error adding user, error => ', error);
    }
};

export const addExpense = async (userId, expense) => {
    try {
        await addDoc(collection(db, 'expenses'), {userId,...expense});

    } catch (error) {
        console.error('Error adding expense, error => ', error);    
    }
};

export const addbudget = async(userId, budget) => {
    try {
        await addDoc(collection(db,'budgets'), {userId, ...budget});
    } catch (error) {
        console.error('Error adding budget, error => ', error);
    }
};