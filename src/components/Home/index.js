import React from "react";
import { createGlobalStyle } from 'styled-components';
import SeedTemplate from './SeedTemplate';
import SeedHead from './SeedHead';
import SeedList from './SeedList';
import SeedCreate from './SeedCreate';



const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function Home() {
  return (
    <>
      <GlobalStyle />
      <SeedTemplate>
        <SeedHead />
        <SeedList />
        <SeedCreate />
      </SeedTemplate>
    </>
  );

}

export default Home;