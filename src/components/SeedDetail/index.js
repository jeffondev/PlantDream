import React, { useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import SeedHead from "./SeedHead";
import SeedPlant from "./SeedPlant";
import SeedTemplate from './SeedTemplate';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { setSeedDetail } from "../../store"
import { useDispatch } from "react-redux"

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function SeedDetail() {

  let dispatch = useDispatch();

  const { id } = useParams();

  useEffect(()=>{
    axios.get(`/v1/seeds/${id}`)
      .then((data)=>{ 
        console.log(data.data)
        dispatch(setSeedDetail(data.data))
      })
  }, [])

  return (
    <>
      <GlobalStyle />
      <SeedTemplate>
        <SeedHead />
        
        <SeedPlant/>
      </SeedTemplate>
    </>
  );

}

export default SeedDetail;