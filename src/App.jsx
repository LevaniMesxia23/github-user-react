import { useState } from "react";
import LightToggle from "./components/LightToggle";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import Input from "./components/Input";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <LightToggle />
      </Header>
      <Input />
      <MainContainer>
        
      </MainContainer>
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
