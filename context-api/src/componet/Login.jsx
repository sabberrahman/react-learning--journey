import React from 'react';
import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [ username , setUsername]=useState("")
    const [password , setPassword]=useState("")
    
    //send data
    const {setUser}= useContext(UserContext)

    const handleSubmit = ()=>{
       e.preventDefault()
       setUsername({username , password})
    }

    return (
        <div>
             <h2>Login Karlo</h2>
             <input type="text"
             value={username} 
             onChange={(e)=> setUsername(e.target.value)} placeholder='username' />
             <input type="text"
             value={password} 
             onChange={(e)=> setPassword(e.target.value)}  placeholder='password' />
             <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;