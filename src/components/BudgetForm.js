import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddBudgetForm =() => {
    const {dispatch} = useContext(AppContext)
    const [newBudget, setNewBudget] = useState('') // Renamed to newBudget to avoid shadowing

    const onSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "Edit_Budget",
            payload: parseInt(newBudget),

        });
    };


    return (
        <form onSubmit={onSubmit}>
            <div className ='row'>
                <div className='col-sm'>
                    <label htmlFor = "budget"> Budget </label>
                    <input 
                        required = 'required'
                        type = 'text'
                        className='form-control'
                        id ='budget'
                        value = {newBudget}
                        onChange ={(event) => setNewBudget(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Submit Budget 💰
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddBudgetForm;
