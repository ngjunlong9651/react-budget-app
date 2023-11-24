import { createContext, useReducer, useEffect } from 'react'; 



const AppReducer = (state, action) => {
	switch (action.type) {
		case 'Add_Expense':
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
        return localData ? JSON.parse(localData) : initialState;
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