import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const AddBudgetForm =() => {
    const {dispatch} = useContext(AppContext)
    const [budget,setBudget] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();

        const budget = {
            id: uuidv4(),
            budget: parseInt(budget),
        };

        dispatch({
            type: "Add_budget",
            payload: budget,

        });
    };


    return (
        <form onSubmit={onSubmit}>
            <div className ='row'>
                <div className='col-sm'>
                    <label for ="name"> Budget </label>
                    <input 
                        required = 'required'
                        type = 'integer'
                        className='form-control'
                        id ='name'
                        value = {budget}
                        onChange ={(event) => setBudget(event.target.value)}
                    ></input>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>
                        Submit Budget 
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddBudgetForm;
