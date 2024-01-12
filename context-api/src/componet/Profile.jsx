import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

function Profile() {
    const {user}= useContext(UserContext)
    
    if (!user) return <div className='text-center m-4'>Please Login</div> 

    return <div>Welcome {user.username} <br />
     your password {user.password}</div>
}

export default Profile;