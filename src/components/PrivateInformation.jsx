import React from "react";
import Location from "../../public/images/icon-location.svg";
import Twitter from "../../public/images/icon-twitter.svg";
import Website from "../../public/images/icon-website.svg";
import Company from "../../public/images/icon-company.svg";
import styled from "styled-components";

export default function PrivateInformation({ isClicked, setisClicked }) {
  return (
    <Container isClicked={isClicked}>
      <div>
        <img src={Location} alt="" />
        <span>San Francisco</span>
      </div>

      <div>
        <img src={Twitter} alt="" />
        <span>Not Available</span>
      </div>

      <div>
        <img src={Website} alt="" />
        <span>https://github.blog</span>
      </div>

      <div>
        <img src={Company} alt="" />
        <span>@github</span>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 30rem;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.19rem;
  column-gap: 4.5rem auto;
  margin-top: 2.39rem;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
    }
    span {
      color: ${(props) => (props.isClicked ? "#fff" : "#4B6A9B")};
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
