import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux"
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const SeedHeadBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
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
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const SeedHeadTitle = styled.div`
  font-size: 30px;
  padding-left: 10px;
`;

function SeedHead() {
  const navigate = useNavigate();

  let state = useSelector((state)=> state);
  const title = state.seedDetail.title;

  return (
    <SeedHeadBlock>
      <MdKeyboardArrowLeft onClick={()=>navigate(-1)}/>
      <SeedHeadTitle>{title}</SeedHeadTitle>
    </SeedHeadBlock>
  );
}

export default SeedHead;
