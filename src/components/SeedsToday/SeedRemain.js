import React from 'react';
import axios from "axios";
import styled from 'styled-components';
import { useSelector } from "react-redux"

const SeedHeadBlock = styled.div`
  border-top: 1px solid #e9ecef;
  position:relative;
  height: 72px;
`;

const ProgressBar = styled.div`
  height: 50px;
  background-color: green;
  overflow: hidden;
  position: relative;
`;

const ProgressGauge = styled.span`
  height: 100%;
  /* display: inline-block; */
  position: absolute;
  top: 0;
  z-index: 99;
  width: ${props => `${props.width}%`};
  text-align: center;
  /* transform: translate(-50%, -50%); */
  background-color: orange;
`;

function SeedReamin() {

  let state = useSelector((state)=> state);

  return (
    <SeedHeadBlock>
      <ProgressBar>
        <ProgressGauge width={10}>
          {state.seeds.length}
        </ProgressGauge>
      </ProgressBar>

    </SeedHeadBlock>
  );

}

export default SeedReamin