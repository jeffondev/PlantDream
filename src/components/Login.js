import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { loggined } from "../store"

function Login() {
  let [이메일, 이메일변경] = useState('');
  let [비밀번호, 비밀번호변경] = useState('');
  let [isErr, setIsErr] = useState(false);

  let state = useSelector((state)=> state);
  let dispatch = useDispatch();

  function LoginClick(e) {
    console.log(이메일);
    axios.post('/v1/auth/signin', {"email" : 이메일, "password" : 비밀번호})
    .then((res)=> {
      dispatch(loggined())
    })
    .catch((err) => {
      console.error("[%d] msg: %s", err.response.status, err.response.data.msg);
      setIsErr(true);
    })
    // dispatch(loggined())
  }

  const handleEmailChange = (e) => {
    이메일변경(e.target.value);
  }

  return (
    <div className="App">
    <div>
      <div className='main-page'>
        <div>
        { !state.isLoggined && "login하세요" }
          <h2>Plant a Dream</h2>
          <input type="text" placeholder='이메일' onChange={handleEmailChange}></input>
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

export default Login;