import React, { useState } from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

const Login = () =>{
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    const inputHandler = (event) =>{
        setUser(event.target.value);
    }

    const submitHandler = () =>{
        auth.Login(user);
        navigate('/');
    }
    return(
        <>
            <label>UserName:</label>
            <input type='text' onChange={inputHandler}/>
            <button type='submit' onClick={submitHandler}>Login</button>
        </>
    )
}

export default Login;