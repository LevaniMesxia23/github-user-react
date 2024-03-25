import React from "react";
import Moon from "../../public/images/icon-moon.svg";
import styled from "styled-components";

export default function LightToggle() {
  return (
    <Header>
      <h1>devfinder</h1>
      <div>
        <span>Dark</span>
        <img src={Moon} alt="" />
      </div>
    </Header>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 29.9rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    span {
      color: #697c9a;
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
  }
`;
