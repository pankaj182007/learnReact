import React from 'react'
import { useContext,useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault() 
        setUser ({userName,password})
    }

    return (
        <div className='' >
            <h2>Login</h2>
            <input type='text'  className='outline-none  py-1 px-1 rounded-lg shadow-orange-400 ' 
            value={userName} 
            onChange={(e)=>setUserName(e.target.value)}
             placeholder='userName'/>

            <input type='text' className='outline-none  py-1 px-1 rounded-lg shadow-orange-400 '
             value={password} 
            onChange={(e)=>setPassword(e.target.value)}           
            placeholder='password'/>

            <button className=' bg-orange-400 outline-none  py-1 px-1 rounded-lg shadow-orange-400 ' 
            onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login
