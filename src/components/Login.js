import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiURL from "./GetUrl";
import MyButton from "./MyButton";



const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
     
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            navigate('/')
        }
    })
    
    const handleLogin= async ()=>{
        console.log(email, password);
        let result= await fetch(`${ApiURL}/user/login`, {
            method:'post',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        if(result.username)
        {
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/')
        }else{
            alert("please enter valid details")
        }
    }

    return(
        <div className="login-outer">
        <div className="login">
            <h2 align="center" >Login</h2>
        
            <input className="inputBox" type="text"
                value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Enter Email" />

            <input className="inputBox" type="password" style={{ marginBottom: "2rem" }}
                value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

            <MyButton color='rgb(2, 1, 1)' text="Login" onClick={handleLogin} />
        </div>
    </div>
    )
}

export default Login;