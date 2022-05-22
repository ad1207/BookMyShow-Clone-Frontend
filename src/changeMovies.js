import React,{useState} from "react";
import { BrowserRouter, Route, Routes,Link,useNavigate } from 'react-router-dom';
import axios from "axios";

function UpdateTheaterComponent(){
    const [state,setState] = useState({
        name:'',
        address:'',
        phone:'',
        movieRunning:['','','','']
    })

    const handleSubmit = (e) => {
        let s = document.cookie.toString().slice(6)
        e.preventDefault()
        axios.put('https://book-my-show-clone-nodejs.herokuapp.com/admin/update',{
            name:state.name,
            address:state.address,
            phone:state.phone,
            movieRunning:state.movieRunning
        },{
            headers:{
                'x-access-token':s
            }
        }).then((res) => {
            console.log(res)
        })
    }

    return(
        <div>
            <h2>Add Theatre Details</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input type='text' value={state.name} onChange={(e) => setState({name:e.target.value, address:state.address, phone:state.phone, movieRunning:state.movieRunning})}/>
                </div>
                <div>
                    <label>Address:</label>
                    <input type='text' value={state.address} onChange={(e) => setState({name:state.name, address:e.target.value, phone:state.phone, movieRunning:state.movieRunning})}/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input type='text' value={state.phone} onChange={(e) => setState({name:state.name, address:state.address, phone:e.target.value, movieRunning:state.movieRunning})}/>
                </div>
                <div>
                    <label>Morning Show:</label>
                    <input type='text' value={state.movieRunning[0]} onChange={(e) => setState({name:state.name, address:state.address, phone:state.phone, movieRunning:[e.target.value,state.movieRunning[1],state.movieRunning[2],state.movieRunning[3]]})}/>
                </div>
                <div>
                    <label>Matinee Show:</label>
                    <input type='text' value={state.movieRunning[1]} onChange={(e) => setState({name:state.name, address:state.address, phone:state.phone, movieRunning:[state.movieRunning[0],e.target.value,state.movieRunning[2],state.movieRunning[3]]})}/>
                </div>
                <div>
                    <label>Evening Show:</label>
                    <input type='text' value={state.movieRunning[2]} onChange={(e) => setState({name:state.name, address:state.address, phone:state.phone, movieRunning:[state.movieRunning[0],state.movieRunning[1],e.target.value,state.movieRunning[3]]})}/>
                </div>
                <div>
                    <label>Night Show:</label>
                    <input type='text' value={state.movieRunning[3]} onChange={(e) => setState({name:state.name, address:state.address, phone:state.phone, movieRunning:[state.movieRunning[0],state.movieRunning[1],state.movieRunning[2],e.target.value]})}/>
                </div>
                <button type='submit' onClick={(e) => handleSubmit(e)}>Add</button>
            </form>
        </div>
    )
}

export default UpdateTheaterComponent