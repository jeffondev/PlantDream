
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/Login';

function App() {
  let [Logined, setLogined] = useState(false);

  let [이메일,이메일변경] = useState('');
  let [비밀번호, 비밀번호변경] = useState('');
  let [isErr, setIsErr] = useState(false);

  function LoginClick(e) {
    axios.post('/v1/login', {"email" : 이메일, "password" : 비밀번호})
    .then((res)=> {
      console.log(res); 
      setLogined(true);
    })
    .catch((err) => {
      console.error("[%d] msg: %s", err.response.status, err.response.data.msg);
      setIsErr(true);
    })
  }

  if(!Logined) {
    return (
      <div className="App">
        <div>
          <div className='main-page'>
            <div>
              <h2>Plant a Dream</h2>
            <input type="text" placeholder='이메일' onChange={(e)=>{ 이메일변경(e.target.value) }}></input>
            </div>

            <div>
              <input type="password" placeholder='비밀번호' onChange={(e)=>{ 비밀번호변경(e.target.value) }}></input>
            </div>
            <button onClick={() => {LoginClick()}}>로그인</button>
            {isErr && (
              <div className='login-err'>로그인 정보가 잘못되었습니다.</div>
            )}
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <Login />
    );
  }
}

export default App;
