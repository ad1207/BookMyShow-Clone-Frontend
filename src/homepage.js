import React from "react";
import { BrowserRouter, Route, Routes,Link,useNavigate } from 'react-router-dom';

function WelcomeComponent(){
    const navigate = useNavigate();
    const loginUser = () => {
        navigate("/login-user");
    }
    const loginAdmin = () => {
        navigate("/login-admin");
    }
    const signupUser = () => {
        navigate("/signup-user");
    }
    const signupAdmin = () => {
        navigate("/signup-admin");
    }
    return(
        <div>
            <h2>Welcome to BookMyShow!<br></br></h2><h3> Please Login Or Sign Up if you dont have an account</h3>
            <button onClick={()=>loginUser()}>Login as User</button>&emsp;<button onClick={()=>signupUser()}>Sign Up as User</button><br></br>
            <button onClick={()=>loginAdmin()}>Login as Admin</button>&emsp;<button onClick={()=>signupAdmin()}>Sign Up as Admin</button>
        </div>
    )
}

export default WelcomeComponent