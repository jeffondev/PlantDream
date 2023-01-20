
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/Login';
import Home from './components/Home';
import { useDispatch, useSelector } from "react-redux"
import { loggined } from "./store"

function App() {
  let [Logined, setLogined] = useState(false);


  let state = useSelector((state)=> state);
  let dispatch = useDispatch();

  // AuthRouter
// <Route path="/login" linkto="components/Login" />

// <Route path="/login" linkto="components/Login" />

  if(!state.isLoggined) {
    return (
      <Login />
    );
  }
  else {
    return (
      <Home/>
    );
  }
}

export default App;
