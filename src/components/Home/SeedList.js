import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SeedItem from './SeedItem';
import axios from 'axios';

const SeedListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;



function SeedList() {

  let [seeds, setSeeds] = useState([]); 

  useEffect(()=>{
    console.log('fddf')

    axios.get('/v1/seeds')
      .then((data)=>{
        setSeeds(data.data)
      })
  }, [])

  

  return (
    <SeedListBlock>

      {
        seeds.map((seed, index) => (
          <SeedItem key={index} text={seed.title} done={true} />
        ))
      }

    </SeedListBlock>
  );
}

export default SeedList;