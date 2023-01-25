
import React from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet , Redirect, Navigate} from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/Login';
import Seeds from './components/Seeds';
import { useSelector } from "react-redux"
import SeedDetail from './components/SeedDetail';
// import { loggined } from "./store"

function App() {
  // let [Logined, setLogined] = useState(false);


  let state = useSelector((state)=> state);
  // let dispatch = useDispatch();

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
      <Routes>
         <Route path='/' element={<Navigate to={"/seeds"}/>}/>
        <Route path='/seeds' element={<Seeds/>}/>
        <Route path='/seeds/:id?' element={<SeedDetail/>}/>
     </Routes> 
    );
  }

}

export default App;
