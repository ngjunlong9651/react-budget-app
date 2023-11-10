import { createContext, useReducer } from 'react'; 
import Budget from '../components/Budget';



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
		default:
			return state;
	}
};

const initialState = {
	budget: 0,
	expenses: [
		{ id: 12, name: 'shopping', cost: 40 },
		{ id: 13, name: 'holiday', cost: 400 },
		{ id: 14, name: 'car service', cost: 50 },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};