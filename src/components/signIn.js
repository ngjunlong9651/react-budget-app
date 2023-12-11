import React, {useState} from 'react'
import { signIn } from '../authService'

const signIn =() =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            await signIn(email,password);
            // handle successful log in
        } catch (error){
            console.error('Error Signing In', error)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type ='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default signIn;