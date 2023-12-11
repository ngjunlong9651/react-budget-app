import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { addExpense } from '../firebase_setup/firebaseServices';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm =() => {
    const {dispatch, categories} = useContext(AppContext)
    const [name,setName] = useState('')
    const [cost,setCost] = useState('')
    const [category, setCategory] = useState('')
    const [newCategory, setNewCategory] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
            category: category,
        };

        dispatch({
            type: "Add_Expense",
            payload: expense,
        });
        
        addExpense(user.uid)

        // Reset the form fields:
        setName('');
        setCost('');
        setCategory('');

    };

    const handleAddCategory =() =>{
        console.log(newCategory)
        dispatch({
            type: 'Add_Category',
            payload: newCategory,
        });
        console.log(newCategory)
        setNewCategory('');
    }


    return (
        <form onSubmit={onSubmit}>
            <div className ='row'>
                <div className='col-sm'>
                    <label htmlFor ="name"> Name </label>
                    <input 
                        required = 'required'
                        type = 'text'
                        className='form-control'
                        id ='name'
                        value = {name}
                        onChange ={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className='col-sm'>
                    <label htmlFor ="cost"> Cost </label>
                    <input 
                        required = 'required'
                        type = "text"
                        className='form-control'
                        id="cost"
                        value = {cost}
                        onChange = {(event)=> setCost(event.target.value)}
                    ></input>
                </div>
                <div className='col-sm'>
                    <label htmlFor ="category"> Category </label>
                    <select 
                        required = 'required'
                        type='radio'
                        className='form-control'
                        value ={category}
                        onChange={(event)=> setCategory(event.target.value)}
                    >
                        <option value ="">Select a category</option>
                        <option value ="Food">Food 🍔 </option>
                        <option value ="Transport">Transport 🚗 </option>
                        <option value ="Rent">Rent 🏠</option>
                        <option value ="Utilities">Utilities 🔌</option>
                        <option value ="Entertainment">Entertainment 🪩 </option>
                        <option value ="Healthcare"> Healthcare 🏥 </option>
                        <option value ="Others"> Others ❓ </option>

                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}

                    </select>
                </div>
                <div className='col-sm'>
                    <input 
                        type='text'
                        className='form-control'
                        value={newCategory}
                        onChange={(event) => setNewCategory(event.target.value)}
                        placeholder='Set New Category'
                        />
                    <button type ='button' onClick={handleAddCategory} className='btn btn-primary mt-3'>
                    Add New Category 
                    </button>



                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Submit Expense 
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;