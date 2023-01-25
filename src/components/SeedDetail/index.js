import React, { useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import SeedTemplate from './SeedTemplate';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function SeedDetail() {
  return (
    <>
      <GlobalStyle />
      <SeedTemplate>

      </SeedTemplate>
    </>
  );

}

export default SeedDetail;