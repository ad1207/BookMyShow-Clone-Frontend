import React,{useState} from "react";
import { BrowserRouter, Route, Routes,Link,useNavigate } from 'react-router-dom';
import axios from "axios";

function TheaterList(){
    const [list,setList] = useState([])

    React.useEffect(() => {
        let s = document.cookie.toString().slice(6)
        axios.get('http://localhost:5000/admin/getTheater',{
            headers:{
                'x-access-token':s
            }
        }).then(res => setList(res.data)).catch((err) => console.log(err))

    })

    return(
        <div>
            <table border={1}>
          <thead>
            <tr>
              <td> Name </td>
              <td> Address </td>
              <td> Contact </td>
              <td> Movies Running </td>
            </tr>
          </thead>
          <tbody>
            {list.map((row) => (
              <tr>
                <td> {row.name} </td>
                <td> {row.address} </td>
                <td> {row.phone} </td>
                <td> <ol><li>{row.movieRunning[0]}</li>
                <li>{row.movieRunning[1]}</li>
                <li>{row.movieRunning[2]}</li>
                <li>{row.movieRunning[3]}</li>
                    </ol> </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    )
}

export default TheaterList