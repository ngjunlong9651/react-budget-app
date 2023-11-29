import { createContext, useReducer, useEffect } from 'react'; 
import {db} from '../firebase_setup/firebase.js'
import { collection, addDoc } from "firebase/firestore"; 



const AppReducer = (state, action) => {
	switch (action.type) {
		case 'Add_Expense':
			// writing to firestore db
			const addExpense = async () => {
				try {
					const docRef = await addDoc(collection(db, "expenses"), {
						name: action.payload.name,
						cost: action.payload.cost,
						category: action.payload.category,
					});
					console.log("Document written with ID: ", docRef.id);
				} catch (e) {
					console.error("Error adding document: ", e);
				}
			};
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
		case 'Edit_Budget':
			return {
				...state,
				budget: action.payload
			}
		case 'Delete_Expense':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			}
		case 'Add_Category':
			console.log(state.categories)
			console.log(action.payload)
			return{
				...state,
				categories: [...state.categories, action.payload]
			}
		default:
			return state;
	}
};

const initialState = {
	budget: 0,
	expenses: [],
	categories: ['Food', 'Transport', 'Rent', 'Utilities', 'Entertainment', 'Healthcare', 'Others'], // Default categories

};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState, () => {
        // Load the state from local storage
        const localData = localStorage.getItem('budgetData');
		if (localData) {
			try {
				const parsedData = JSON.parse(localData);
				// Validation Logic: Checking if categories is an array:
				if (Array.isArray(parsedData.categories)) {
					return parsedData;
				}
			} catch (error) {
				console.log("Error parsing budget data from localStorage: ", error);
			}
		}
        return initialState;
    });

    useEffect(() => {
        // Save the state to local storage
        localStorage.setItem('budgetData', JSON.stringify(state));
    }, [state]);

    return (
        <AppContext.Provider value={{ ...state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};