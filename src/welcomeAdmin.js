import React from "react";
import { BrowserRouter, Route, Routes,Link,useNavigate } from 'react-router-dom';

function WelcomeAdmin(){
    const navigate = useNavigate();
    const addTheater = () => {
        navigate('/addTheater')
    }
    const list = () => {
        navigate('/list')
    }
    const bookedList = () => {
        navigate('/bookedlist')
    }
    const update = () => {
        navigate('/update')
    }
    return(
        <div>
            <h2>Welcome Admin, What do you want to do?</h2>
            <button onClick={() => addTheater()}>Add theater</button><button onClick={() => update()}>Change theater movies</button><button onClick={() => bookedList()}>See booked tickets</button><button onClick={() => list()}>See Theaters</button>
        </div>
    )
}

export default WelcomeAdmin