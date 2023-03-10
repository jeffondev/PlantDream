import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { pushSeed, setOnTogle } from "../../store"
import * as API from "../../api"

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const SeedItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function SeedItem({ id, done, text }) {

  const navigate = useNavigate();
  const showDetail = (id) => {
    navigate("/seeds/"+id)
  }
  
  let dispatch = useDispatch();
  let state = useSelector((state)=> state);

  const deleteItem = (e) => {
    confirmModal();
  }

  const confirmModal = (e) => {
    if (window.confirm("정말 목표를 삭제하시겠습니까?")) {
      API.getSeedsItem(id)
          .then((res)=>{
            API.getSeeds()
              .then((data)=>{  
                dispatch(pushSeed(data.data))
              })
          })
    }
  }
  
  const handleCheckClick = (e) => {
    API.postSeedsItemPlant(id)
    .then((res)=>{
      API.getSeeds()
      .then((data)=>{
        dispatch(pushSeed(data.data))
      })
    })
  }

  return (
    <SeedItemBlock>
      <CheckCircle done={done} onClick={handleCheckClick}>{done && <MdDone />}</CheckCircle>
      <Text done={done} onClick={() => showDetail(id)}>{text}</Text>
      <Remove>
        <MdDelete onClick={deleteItem}/>
      </Remove>
    </SeedItemBlock>
  );
}

export default SeedItem;
