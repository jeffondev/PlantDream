
import React from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet , Redirect, Navigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Header';
import Login from './components/Login';
import Seeds from './components/Seeds';
import { useSelector, useDispatch } from "react-redux"
import SeedDetail from './components/SeedDetail';
import Join from './components/Join';

import SeedsToday from './components/SeedsToday'

import { setToken } from "./store"

import * as API from "./api"

function App() {

  let state = useSelector((state)=> state);
  let dispatch = useDispatch();
  
  console.log(localStorage.getItem("auth"));

  if(!state.token) {
    const token = localStorage.getItem("auth");
    const email = localStorage.getItem("email");

    if(token) {
      API.postAuthCredentail({email, "auth_token": token})
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
      <Routes>
       <Route path='/' element={<Navigate to={"/login"}/>}/>
       <Route path='/login' element={<Login />}/>
       <Route path='/register' element={<Join />}/>
   </Routes> 
  //  <Login />
    );
  }
  else {
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to={"/seeds/today"}/>}/>
          <Route path='/seeds' element={<Seeds/>}/>
          <Route path='/seeds/today' element={<SeedsToday/>}/>
          <Route path='/seeds/:id?' element={<SeedDetail/>}/>
          <Route path='/seeds/join' element={<Join/>}/>
      </Routes> 
     </>
    );
  }

}

export default App;
