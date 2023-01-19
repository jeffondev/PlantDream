
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/Login';
import { useSelector } from "react-redux"

function App() {
  let [Logined, setLogined] = useState(false);

  // AuthRouter
// <Route path="/login" linkto="components/Login" />

// <Route path="/login" linkto="components/Login" />

  if(!Logined) {
    return (
      <Login />
    );
  }
  else {
    return (
      <div>안녕!! 난 메인</div>
    );
  }
}

export default App;
