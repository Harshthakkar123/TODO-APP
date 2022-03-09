import React, { useEffect, useState } from 'react'
import App from './App'
import { auth } from './Fire';

 const Signup = () => {
     useEffect(()=>{
         console.log(auth)
        
            
     })
     const [email , setEmail] = useState('')
     const [password , setPassword] = useState('')
    return (
        <div>
            <input value={email} placeholder='email' onChange={e=>{
                setEmail(e.target.value)
            }}></input>


<input value={password} placeholder='password' onChange={e=>{
                setPassword(e.target.value)
            }}></input>
            <button onClick={e=>{
 auth.createUserWithEmailAndPassword
 (email,password)
 .catch((err)=>{
     console.log("error");
 })

            }}>SIgn IN</button>
            This is an about component 
            <p>Lorem sed eveniet, nemo amet, dignissimos magnam itaque ipsam possimus. Inventore vitae, perferendis harum quas cupiditate adipisci repellendus tempore asperiores at consequatur quos?</p>
        </div>
    )
}

export default Signup;