import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdApi } from 'react-icons/md';
import * as API from "../api"

const RegistButton = styled.button`
  margin-top: 20px;
`;

function Join() {
  console.log("#44")

  let [input, setInput] = useState({
    email:'',
    password:'',
    password_conform:'',
    name:'',
    phone:''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setInput({
      ...input,
      [name] : value
    })
  }

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    if(!input.email) {
      alert("email 입력하세요")
      return;
    }
    else if(!input.name) {
      alert("name 입력하세요")
      return;
    }
    else if(!input.password) {
      alert("password 입력하세요")
      return;
    }
    else if(input.password != input.password_conform) {
      alert("비밀번호를 확인하세요")
      return;
    }
    API.postAuthSignup(input)
    .then((data)=>{
      navigate("/login")
    })
  }
  return (
    <div className="Login">
    <div>
      <div className='Login-main'>
          <div>
            <h2>Plant a Dream</h2>
            <input name="email" value={input.email} type="text" placeholder='이메일' onChange={handleChange}></input>
            <div>
            <input  name="name" value={input.name} type="text" placeholder='이름' onChange={handleChange}></input>
          </div>
          <div>
            <input name="phone" value={input.phone} type="number" placeholder='핸드폰' onChange={handleChange}></input>
          </div>
          </div>
          <div>
            <input name="password" value={input.password} type="password" placeholder='비밀번호' onChange={handleChange}></input>
          </div>
          <div>
            <input name="password_conform" value={input.password_conform} type="password" placeholder='비밀번호 확인' onChange={handleChange}></input>
          </div>
          <RegistButton onClick={handleSubmit}>가입하기</RegistButton>
      </div>
    </div>
  </div>
  );
}

export default Join;