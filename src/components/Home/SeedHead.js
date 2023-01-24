import React from 'react';
import styled from 'styled-components';
import { useSelector } from "react-redux"

const SeedHeadBlock = styled.div`
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

function SeedHead() {
  let state = useSelector((state)=> state);
  let today = new Date();   

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  let day = today.getDay();  // 요일

  let week = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <SeedHeadBlock>
      <h1>{year + "년" + month + "월" + date + "일"}</h1>
      <div className="day">{week[day] + "요일"}</div>
      <div className="tasks-left">남은 목표 {state.seeds.length}개 남음</div>
    </SeedHeadBlock>
  );
}

export default SeedHead;
