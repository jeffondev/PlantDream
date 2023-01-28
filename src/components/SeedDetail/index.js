import React, { useEffect } from "react";
import { createGlobalStyle } from 'styled-components';
import SeedHead from "./SeedHead";
import SeedTemplate from './SeedTemplate';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function SeedDetail(id) {
  return (
    <>
      <GlobalStyle />
      <SeedTemplate>
        <SeedHead>
          
        </SeedHead>
      </SeedTemplate>
    </>
  );

}

export default SeedDetail;