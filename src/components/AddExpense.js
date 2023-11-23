import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm =() => {
    const {dispatch, categories} = useContext(AppContext)
    const [name,setName] = useState('')
    const [cost,setCost] = useState('')
    const [category, setCategory] = useState('')
    const [newCategory, setNewCategory] = useState('');

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

        // Reset the form fields:
        setName('');
        setCost('');
        setCategory('');
    };

    const handleAddCategory = () => {
        dispatch({
            type: 'Add_Category',
            payload : newCategory,
        })
        setNewCategory('');
    };


    return (
        <form onSubmit={onSubmit}>
            <div className ='row'>
                <div className='col-sm'>
                    <label for ="name"> Name </label>
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
                    <label for ="cost"> Cost </label>
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
                    <label for ="category"> Category </label>
                    <select
                        required='required'
                        className='form-control'
                        value={category} // This holds the selected category
                        onChange={(event) => setCategory(event.target.value)}
        >
            {categories && categories.map((cat, index) => ( // Make sure to use 'categories' here
                <option key={index} value={cat}>{cat}</option>
            ))}
        </select>
                </div>
                <div className='col-sm'>
                    <input
                    type = "text"
                    className='form-control'
                    value={newCategory}
                    onChange={(event) => setNewCategory(event.target.value)}
                    placeholder='New Category'>
                    </input>
                    <button type ="button" onClick={handleAddCategory} className='btn btn-primary mt-3'>
                        Add Category
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
