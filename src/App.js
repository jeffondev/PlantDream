
import React from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet , Redirect, Navigate} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import Seeds from './components/Seeds';
import { useSelector, useDispatch } from "react-redux"
import SeedDetail from './components/SeedDetail';

import ChartTest from './components/ChartTest';
import axios from 'axios';
import { setToken } from "./store"
// import { loggined } from "./store"

function App() {
  // let [Logined, setLogined] = useState(false);


  let state = useSelector((state)=> state);
  let dispatch = useDispatch();
  // let dispatch = useDispatch();

  // AuthRouter
// <Route path="/login" linkto="components/Login" />

// <Route path="/login" linkto="components/Login" />


  // return <ChartTest width={400} height={400} />;

  console.log(localStorage.getItem("auth"));

  if(!state.token) {
    const token = localStorage.getItem("auth");
    const email = localStorage.getItem("email");

    if(token) {
      axios.post('/v1/auth/credential', {email, "auth_token": token})
      .then((res)=>{
        console.log("auto login");
        dispatch(setToken(token));
      })
      .catch((res)=>{
        localStorage.removeItem("auth");
      })
    }
  }

  if(!state.token) {
    return (
      <Login />
    );
  }
  else {
    return (
      <Routes>
         <Route path='/' element={<Navigate to={"/seeds"}/>}/>
        <Route path='/seeds' element={<Seeds/>}/>
        <Route path='/seeds/:id?' element={<SeedDetail/>}/>
     </Routes> 
    );
  }

}

export default App;
