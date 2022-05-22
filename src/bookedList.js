import React,{useState} from "react";
import { BrowserRouter, Route, Routes,Link,useNavigate } from 'react-router-dom';
import axios from "axios";

function BookedList(){
    const [list,setList] = useState([])

    React.useEffect(() => {
        let s = document.cookie.toString().slice(6)
        axios.get('https://book-my-show-clone-nodejs.herokuapp.com/admin/bookedShows',{
            headers:{
                'x-access-token':s
            }
        }).then(res => {
            setList(res.data)
            }).catch((err) => console.log(err))

    })

    return(
        <div>
            <table border={1}>
          <thead>
            <tr>
              <td> Name </td>
              <td> Date </td>
              <td> Movie </td>
              <td>Seats Booked</td>
            </tr>
          </thead>
          <tbody>
            {list.map((row) => (
              <tr>
                <td> {row.name} </td>
                <td> {row.date} </td>
                <td> {row.movie} </td>
                <td> {row.seatNumbers.map((se)=>(
                    <>{se},</>
                ))}
                     </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    )
}

export default BookedList