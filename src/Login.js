import react, { useEffect } from 'react';
import { auth } from './Fire';


const Login=()=>{


    useEffect(()=>{
auth.signInWithEmailAndPassword("abc@gmail.com" , 'bbbbbbbbbbbs')
    },[])
        return(
        <h1>helelo</h1>
        )
    
    }


    

export default Login;