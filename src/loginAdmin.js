import React,{useState} from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { BrowserRouter, Route, Routes,Link,useNavigate } from 'react-router-dom';


function LoginAdminComponent(){
    const [state,setState] = useState({
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const config = {headers:{"Content-Type":"application/json"}}
        const data = {email:state.email, password:state.password}
        axios.post('https://book-my-show-clone-nodejs.herokuapp.com/admin/login',data, config).then((res) => {
            document.cookie = "token="+res.data.token
            navigate('/welcomeAdmin')
        })
    }

    return(
        <div>
            <h2>Login as Admin</h2>
            <form>
                <div>
                    <label>Email:&nbsp;&emsp;&emsp;</label>
                    <input type='email' value={state.email} onChange={(e) => setState({email:e.target.value, password:state.password})}/>
                </div>
                <div>
                    <label>Password: &nbsp;</label>
                    <input type='password' value={state.password} onChange={(e) => setState({email:state.email, password:e.target.value})}/>
                </div>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default LoginAdminComponent