
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  let [이메일,이메일변경] = useState('');
  let [비밀번호, 비밀번호변경] = useState('');

  function LoginClick(e) {
    axios.post('/v1/login', {"email" : 이메일, "password" : 비밀번호})
    .then((res)=> {
      console.log(res.data)
    })
    .catch((err) => {
      console.error("[%d] msg: %s", err.response.status, err.response.data.msg);
    })
  }
  
  return (
    <div className="App">
      <div className='main-page'>
          <div>
            <h2>Plant a Dream</h2>
           <input type="text" placeholder='이메일' onChange={(e)=>{ 이메일변경(e.target.value) }}></input>
          </div>

          <div>
            <input type="password" placeholder='비밀번호' onChange={(e)=>{ 비밀번호변경(e.target.value) }}></input>
          </div>
          <button onClick={() => {LoginClick()}}>로그인</button>
      </div>
    </div>
  );
}

export default App;
