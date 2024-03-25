import React from "react";
import styled from "styled-components";
import Search from "../../public/images/icon-search.svg";

export default function Input() {
  return (
    <Container>
      <img src={Search} alt="" />
      <input type="text" />
      <button>Search</button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2.25rem;

  img {
    position: absolute;
    top: 1.41rem;
    left: 2rem;
  }

  input {
    width: 45.625rem;
    height: 4.3125rem;
    flex-shrink: 0;
    border-radius: 0.9375rem;
    background: #fefefe;
    box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
    border: none;

    color: #4b6a9b;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5625rem;
  }

  button {
    position: absolute;
    right: 0.62rem;
    top: 0.59rem;
    width: 6.625rem;
    height: 3.125rem;
    flex-shrink: 0;
    border-radius: 0.625rem;
    background: #0079ff;
    border: none;

    color: #fff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
