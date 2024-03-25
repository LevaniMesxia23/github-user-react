import { useState } from "react";
import LightToggle from "./components/LightToggle";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <LightToggle />
      </Header>
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
