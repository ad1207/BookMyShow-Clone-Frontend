import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomeComponent from './homepage';
import LoginUserComponent from './loginUser';
import LoginAdminComponent from './loginAdmin';
import SignupUserComponent from './signupUser';
import SignupAdminComponent from './signupAdmin';
import WelcomeAdmin from './welcomeAdmin';
import AddTheaterComponent from './addTheater';
import TheaterList from './getTheaterList';
import BookedList from './bookedList';
import UpdateTheaterComponent from './changeMovies';


function App() {

  const click = () => {
    axios.get('https://book-my-show-clone-nodejs.herokuapp.com/').then(res => console.log(res.data))
  }

  return (
    <div className="App">
     <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<WelcomeComponent/>}/>
          <Route path='/login-user' element={<LoginUserComponent/>}/>
          <Route path='/login-admin' element={<LoginAdminComponent/>}/>
          <Route path='/signup-user' element={<SignupUserComponent/>}/>
          <Route path='/signup-admin' element={<SignupAdminComponent/>}/>
          <Route path='/welcomeAdmin' element={<WelcomeAdmin/>}/>
          <Route path='/addTheater' element={<AddTheaterComponent/>}/>
          <Route path='/list' element={<TheaterList/>}/>
          <Route path='/bookedlist' element={<BookedList/>}/>
          <Route path='/update' element={<UpdateTheaterComponent/>}/>
        </Routes>
       </BrowserRouter>
     </div>
    </div>
  );
}

export default App;
