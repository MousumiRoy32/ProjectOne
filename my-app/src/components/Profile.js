import React from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';

const Profile = () =>{
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () =>{
        auth.LogOut();
        navigate('/');
    }
    return(
        <div>
            <div>Welcome {auth.user}</div>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default Profile;