import React, { useState } from 'react';

function Login() {
    const [email,setEmail]=useState('')
    const[password,setPassword]=useState('')

    const submitform=async(e)=>{
    e.preventDefault()
    const req= await fetch("https://reqres.in/api/login",{
       method:"POST",
       headers:{
        "x:api-key":"reqres_3ff78a12be124e9ba9a03eac93e306af",
        "Content-Type": "application/json"

       },
       body:JSON.stringify({email,password})
    }) 
    const data= await req.json()
    if(data.token){
        window.location="https://ainwikinfotech.in"

    }
}
  
    return (
        <div>
            <h2>Fake Data "email": "eve.holt@reqres.in", "password": "cityslicka" </h2>
            <form onSubmit={submitform}className="Flex">
                <h2>Login form</h2>
                <input type="email" className='border' value={email} onChange={e =>setEmail(e.target.value)}/>
                <input type="password" className='border/>
                <input type="submit" value="login"  value={password} onChange={e =>setPassword(e.target.value)}className='bg-blue-400-p3 rounded ms-3/>
            </form>
        </div>
    );
}

export default Login;