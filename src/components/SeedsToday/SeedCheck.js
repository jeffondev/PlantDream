import Carousel from 'react-bootstrap/Carousel';
import styled, { css } from 'styled-components';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { pushSeed } from "../../store"
import { useNavigate } from 'react-router-dom';
import { MdDone, MdDelete } from 'react-icons/md';

const CardSection = styled.div`
  width: 100%;
  height: 500px;
  background: skyblue;
  display : flex;
  flex-direction: column;
  justify-content: center;
  align-items : center;
`;

const CardTitle = styled.div`
  text-align: center;
  background-color: red;
  font-size: 60px;
`;

const CheckCircle = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 48px;
  border: 6px solid #ced4da;
  font-size: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;


function SeedCheck() {
  let state = useSelector((state)=> state);
  let dispatch = useDispatch();
  useEffect(()=>{
    axios.get('/v1/seeds')
      .then((data)=>{ 
        dispatch(pushSeed(data.data))
      })
  }, [])

  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/seeds/${id}`);
  };

  const handleCheckClick = (id) => {
    // axios.post(`/v1/seeds/${id}/plant`)
    // .then((res)=>{
    //   axios.get(`/v1/seeds`)
    //   .then((data)=>{
    //     dispatch(pushSeed(data.data))
    //   })
    // })
  }

  return (
    <Carousel>
      
    {
      state.seeds.map((seed, index) => (
        <Carousel.Item key={index}>
            <CardSection>
              <CheckCircle done={seed.done} onClick={handleCheckClick(seed.id)}>{!seed.done && <MdDone />}</CheckCircle>
              <CardTitle onClick={() => handleCardClick(seed.id)}>{seed.title}</CardTitle>
            </CardSection>
          </Carousel.Item>
      ))
    }


    </Carousel>
  );
}

export default SeedCheck;