import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm =() => {
    const {dispatch} = useContext(AppContext)
    const [name,setName] = useState('')
    const [cost,setCost] = useState('')
    const [category, setCategory] = useState('')

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
                        required = 'required'
                        type='radio'
                        className='form-control'
                        value ={category}
                        onChange={(event)=> setCategory(event.target.value)}
                    >
                        <option value ="">Select a category</option>
                        <option value ="food">Food 🍔 </option>
                        <option value ="transport">Transport 🚗 </option>
                        <option value ="rent">Rent 🏠</option>
                        <option value ="utilities">Utilities 🔌</option>
                        <option value ="entertainment">Entertainment 🪩 </option>
                        <option value ="healthcare"> Healthcare 🏥 </option>
                        <option value ="others"> Others ❓</option>
                    </select>
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
