import React, { useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import SeedTemplate from './SeedTemplate';
import SeedHead from './SeedHead';
import SeedCheck from './SeedCheck';
import SeedRemain from './SeedRemain';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function Seeds() {
  return (
    <>
      <SeedTemplate>
        <SeedHead />
        <SeedCheck />
        <SeedRemain />
      </SeedTemplate>
    </>
  );

}

export default Seeds;