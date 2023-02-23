import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from 'react-router-dom';
import { setToken } from "../store"
import styled from 'styled-components';
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import tree from "../img/나무무무무.png"
import * as API from "../api";

const Button = styled.button`
  /* padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px; */
  border-bottom: 1px solid #e9ecef;
`;

function Login() {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [isErr, setIsErr] = useState(false);

  let state = useSelector((state)=> state);
  let dispatch = useDispatch();

  function LoginClick(e) {
    API.postAuthSignin({"email" : email, "password" : password})
    .then((res)=> {
      const token = res.data.token;
      console.log(res, token);
      dispatch(setToken(token));
      localStorage.setItem("email", email);
      localStorage.setItem("auth", token);
      navigate("/")
    })
    .catch((err) => {
      console.error("[%d] msg: %s", err.response.status, err.response.data.msg);
      setIsErr(true);
    })
    // dispatch(loggined())
  }

  const navigate = useNavigate();
  function JoinClick(e) {
    console.log("111")
    // navigate('/join');
    navigate("/register")
  }

  const handleEmailChange = (e) => {
    console.log("handleEmailChange")
    setEmail(e.target.value);
  }
  useEffect(() => {
    // console.log(localStorage.getItem("email"))
    setEmail(localStorage.getItem("email"))
  }, [])

  return (
    <div className="Login">
    <div>
      <div className='Login-main'>
        <BrowserView>
          <div>
            { !state.isLoggined && "login하세요" }
            <h2>Plant a Dream</h2>
            <input type="text" placeholder='이메일' value={email} onChange={handleEmailChange}></input>
          </div>
          <div>
            <input type="password" placeholder='비밀번호' onChange={(e)=>{ setPassword(e.target.value) }}></input>
          </div>
          <Button onClick={() => {LoginClick()}}>로그인</Button>
          <Button onClick={() => {JoinClick()}}>회원가입</Button>
          {isErr && (
            <div className='login-err'>로그인 정보가 잘못되었습니다.</div>
          )}
        </BrowserView>

        <MobileView>
          <div>
            <img src={tree}/>
          </div>
          <div>
            { !state.isLoggined && "login하세요" }
            <h2>Plant a Dream</h2>
            <input type="text" placeholder='이메일' onChange={handleEmailChange}></input>
          </div>
          <div>
            <input type="password" placeholder='비밀번호' onChange={(e)=>{ setPassword(e.target.value) }}></input>
          </div>
          <Button onClick={() => {LoginClick()}}>로그인</Button>
          <Button onClick={() => {JoinClick()}}>회원가입</Button>
          {isErr && (
            <div className='login-err'>로그인 정보가 잘못되었습니다.</div>
          )}
        </MobileView>
      </div>
    </div>
  </div>
  );
}

export default Login;