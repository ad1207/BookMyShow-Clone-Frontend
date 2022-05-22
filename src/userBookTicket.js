import React,{useState,useEffect} from "react";
import axios from "axios";

function BookTicketComponent(){
    const [list,setList] = useState([])
    const [load,setLoad] = useState(true)
    const [state,setState] = useState({
        name:'',
        date:'',
        movie:0,
    })

    const [seat,setSeat] = useState([])
    const [add,setAdd] = useState(false)

    useEffect(() => {
        if(load){
        let s = document.cookie.toString().slice(6)
        axios.get('https://book-my-show-clone-nodejs.herokuapp.com/user/bookedShows',{
            headers:{
                'x-access-token':s
            }
        }).then(res => {
            setList(res.data)
            }).catch((err) => console.log(err))
        }
        setLoad(false)
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
        setAdd(true)
        
    }

    return(
        <div>
            <h2>Welcome! Book Your tickets</h2>
            <form>
                <div>
                    <label>Theater Name:</label>
                    <input type='text' value={state.name} onChange={(e) => setState({name:e.target.value,date:state.date,movie:state.movie})}/>
                </div>
                <div>
                    <label>Date:</label>
                    <input type='text' value={state.date} onChange={(e) => setState({name:state.name,date:e.target.value,movie:state.movie})}/>
                </div>
                <div>
                    <label>Slot:</label>
                    <input type='number' value={state.movie} onChange={(e) => setState({name:state.name,date:state.date,movie:parseInt(e.target.value)})}/>
                </div>
                <button onClick={(e) => handleSubmit(e)}>search</button>
            </form>
            {add?<SearchComponent state={state} list={list}/>:<></>}
            <div></div>
        </div>
    )
}

function SearchComponent(props){
    const [seatbooked,setseatsbook] = useEffect([])
    const [avail,setAvail] = useEffect([])
    const search = () => {
        const avai=[]
        for(let i=0;i<props.list.length;i++){
            if((props.list[i].name==props.state.name)&&(props.list[i].date==props.state.date)&&(props.list[i].movie==props.state.movie)){
                setseatsbook(props.list[i].seatNumbers)
            }
        }
        for(let i=0;i<100;i++){
            if(!(seatbooked.includes(i))){
                avai.push(i)
            }
        }
        setAvail(avai)

    }
    return(
        <div>
            Available Seats <br></br>
            {avail.map((num) => (
                <>{num},</>
            ))}
        </div>
    )

}

export default BookTicketComponent