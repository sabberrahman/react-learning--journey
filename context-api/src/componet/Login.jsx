import React from 'react';
import { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [ username , setUsername]=useState("")
    const [password , setPassword]=useState("")

    //send data
    const {setUser}= useContext(UserContext)

    const handleSubmit = (e)=>{
       e.preventDefault()
       setUser({username,password})
    }

    return (
        <div className='text text-center'>
             <h2>Login Karlo</h2>
             <input type="text"
             value={username} 
             onChange={(e)=> setUsername(e.target.value)} placeholder='username' /> <br/> <br />
             <input type="text"
             value={password} 
             onChange={(e)=> setPassword(e.target.value)}  placeholder='password' />
             <button onClick={(e)=>handleSubmit(e)} className='b bg-gray-600 px-4 m-3'>Submit</button>
        </div>
    );
}

export default Login;