import React from "react";
import Moon from "../../public/images/icon-moon.svg";
import Sun from "../../public/images/icon-sun.svg";
import styled from "styled-components";
import { useState } from "react";

export default function LightToggle({ isClicked, setisClicked }) {
  function handleReload(){
    window.location.reload()
  }
  return (
    <Header isClicked={isClicked}>
      <p onClick={handleReload}>devfinder</p>
      <div onClick={() => setisClicked(!isClicked)}>
        <span>{isClicked ? "Light" : "Dark"}</span>
        <img src={isClicked ? Sun : Moon} alt="" />
      </div>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 31.5rem;

  p {
    color: ${(props) => (props.isClicked ? "#fff" : "#222731")};
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    span {
      color: ${(props) => (props.isClicked ? "#fff" : "#697c9a")};
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.15625rem;
      cursor: pointer;
    }

    img {
      width: 1.25rem;
      height: 1.25rem;
      cursor: pointer;
    }
    div:hover {
      color: ${props => props.isClicked ? "#90A4D4" : "black"};
    }
    &:hover {
    cursor: pointer;
    
    span {
      color: ${(props) => (props.isClicked ? "#90A4D4" : "black")};
    }
  }
  }
  
`;
