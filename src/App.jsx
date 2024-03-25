import { useState } from "react";
import LightToggle from "./components/LightToggle";
import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import Input from "./components/Input";
import ContainersHeader from "./components/ContainersHeader";
import InformationBox from "./components/InformationBox";
import PrivateInformation from "./components/PrivateInformation";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header>
        <LightToggle />
      </Header>
      <Input />

      <Container>
        <ContainersHeader />
        <InformationBox />
        <PrivateInformation />
      </Container>
    </>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 45.625rem;
  flex-shrink: 0;
  border-radius: 0.9375rem;
  background: #fefefe;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  margin-top: 1.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default App;
