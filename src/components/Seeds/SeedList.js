import React, { useEffect } from 'react';
import styled from 'styled-components';
import SeedItem from './SeedItem';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux"
import { pushSeed, setOnTogle } from "../../store"
import * as API from "../../api"

const SeedListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function SeedList() {
  let state = useSelector((state)=> state);
  let dispatch = useDispatch();

  useEffect(()=>{
    API.getSeeds()
      .then((data)=>{ 
        // console.log(data.data);
        dispatch(pushSeed(data.data))
      })
  }, [])

  // const navigate = useNavigate();
  // function showDetail(id) {
  //   console.log(id);
  //   // navigate(`./{id}`)
  // }x

  return (
    <SeedListBlock>
    {
      state.seeds.map((seed, index) => (
        <SeedItem key={index} id={seed.id} text={seed.title} done={seed.done}/>
      ))
    }
    </SeedListBlock>
  );
}

export default SeedList;