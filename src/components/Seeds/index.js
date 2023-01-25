import React, { useEffect } from "react";
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


function Seeds() {
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

export default Seeds;