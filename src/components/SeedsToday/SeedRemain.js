import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useSelector } from "react-redux"

const SeedHeadBlock = styled.div`
  /* padding-top: 500px; */
  padding-left: 32px;
  padding-right: 32px;
  /* padding-bottom: 48px; */
  border-top: 1px solid #e9ecef;
  position:relative;
  height: 72px;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 30px;
    margin-top: 40px;
    font-weight: bold;
    position:absolute;
    bottom:0px;
  }
`;

function SeedReamin() {

  let state = useSelector((state)=> state);

  return (
    <SeedHeadBlock>
      <div className='tasks-left'>{state.seeds.length} 남음</div>
    </SeedHeadBlock>
  );

}

export default SeedReamin