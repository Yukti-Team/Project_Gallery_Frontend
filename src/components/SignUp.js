import React, { useState , useEffect} from "react";
import { useNavigate} from "react-router-dom";
import MyButton from "./MyButton";

const SignUp = () => {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    useEffect(()=>{
        const auth= localStorage.getItem('user');
        if(auth)
        {
            navigate('/')
        }
    })


    const collectData = async () => {
        console.log(username, email, password);
        let result = await fetch('http://localhost:5000/user/signup', {
            method: 'post',
            body: JSON.stringify({ username, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        }) 
        result = await result.json()
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result));
        if(result)
        {
            navigate('/')
        }
    }


    return (
        <div className="register-outer-div">
            <div className="register">
                <h2 align="center" >Register</h2>
                <input className="inputBox" type="text"
                    value={username} onChange={(e) => setName(e.target.value)} placeholder="Enter Username" />

                <input className="inputBox" type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

                <input className="inputBox" type="password" style={{ marginBottom: "2rem" }}
                    value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />

                <MyButton color='rgb(2, 1, 1)' text="Sign Up" onClick={collectData} />
            </div>
        </div>
    )
}

export default SignUp;