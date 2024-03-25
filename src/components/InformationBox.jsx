import React from "react";
import styled from "styled-components";

export default function InformationBox() {
  return (
    <MainBox>
      <div>
        <p>Repos</p>
        <span>8</span>
      </div>

      <div>
        <p>Followers</p>
        <span>3938</span>
      </div>

      <div>
        <p>Following</p>
        <span>9</span>
      </div>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 30rem;
  height: 5.3125rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #f6f8ff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: #4b6a9b;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.2rem;
  }
  span {
    color: #2b3442;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;
