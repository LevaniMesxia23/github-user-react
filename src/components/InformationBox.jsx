import React from "react";
import styled from "styled-components";

export default function InformationBox({
  isClicked,
  setisClicked,
  user,
  setUser,
}) {
  return (
    <MainBox isClicked={isClicked} user={user}>
      <div>
        <p>Repos</p>
        <span>{user.public_repos}</span>
      </div>

      <div>
        <p>Followers</p>
        <span>{user.followers}</span>
      </div>

      <div>
        <p>Following</p>
        <span>{user.following}</span>
      </div>
    </MainBox>
  );
}

const MainBox = styled.div`
  width: 30rem;
  height: 5.3125rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: ${(props) => (props.isClicked ? "#141D2F" : "#f6f8ff;")};
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    color: ${(props) => (props.isClicked ? "#fff" : "#4b6a9b;")};
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 0.2rem;
  }
  span {
    color: ${(props) => (props.isClicked ? "#fff" : "#2b3442;")};
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
`;
