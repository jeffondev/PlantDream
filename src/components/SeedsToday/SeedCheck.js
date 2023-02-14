import Carousel from 'react-bootstrap/Carousel';
import styled, { css } from 'styled-components';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { pushSeed } from "../../store"

const CardSection = styled.div`
  width: 100%;
  height: 500px;
  background: skyblue;
  display : flex;
  justify-content: center;
  align-items : center;
`;

const CardTitle = styled.div`
  text-align: center;
  background-color: red;
  font-size: 60px;
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

  return (
    <Carousel>
      
    {
      state.seeds.map((seed, index) => (
        <Carousel.Item key={index}>
            <CardSection>
              <CardTitle>{seed.title}1</CardTitle>
            </CardSection>
          </Carousel.Item>
      ))
    }


    </Carousel>
  );
}

export default SeedCheck;