import React,{useState} from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { BrowserRouter, Route, Routes,Link,useNavigate } from 'react-router-dom';


function SignupAdminComponent(){
    const [state,setState] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:''
    })

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const config = {headers:{"Content-Type":"application/json"}}
        const data = {firstName:state.firstName, lastName:state.lastName , email:state.email, password:state.password}
        axios.post('https://book-my-show-clone-nodejs.herokuapp.com/admin/register',data, config).then((res) => {
            document.cookie = "token="+res.data.token
            navigate('/welcomeAdmin')
        })
    }

    return(
        <div>
            <h2>SignUp as Admin</h2>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type='text' value={state.firstName} onChange={(e) => setState({firstName:e.target.value, lastName:state.lastName, email:state.email, password:state.password})}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text' value={state.lastName} onChange={(e) => setState({firstName:state.firstName, lastName:e.target.value, email:state.email, password:state.password})}/>
                </div>
                <div>
                    <label>Email:&nbsp;&emsp;&emsp;</label>
                    <input type='email' value={state.email} onChange={(e) => setState({firstName:state.firstName, lastName:state.lastName,email:e.target.value, password:state.password})}/>
                </div>
                <div>
                    <label>Password: &nbsp;</label>
                    <input type='password' value={state.password} onChange={(e) => setState({firstName:state.firstName, lastName:state.lastName,email:state.email, password:e.target.value})}/>
                </div>
                <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </div>
    )
}

export default SignupAdminComponent