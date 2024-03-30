import React from "react";
import Location from "../../public/images/icon-location.svg";
import Twitter from "../../public/images/icon-twitter.svg";
import Website from "../../public/images/icon-website.svg";
import Company from "../../public/images/icon-company.svg";
import styled from "styled-components";

export default function PrivateInformation({
  isClicked,
  setisClicked,
  user,
  setUser,
}) {
  return (
    <Container isClicked={isClicked} user={user}>
      <div>
        <img src={Location} alt="" />
        <span>{user.location === null ? "Not Available" : user.location}</span>
      </div>

      <div>
        <img src={Twitter} alt="" />
        <span>
          {user.twitter_username === null
            ? "Not Available"
            : user.twitter_username}
        </span>
      </div>

      <div>
        <img src={Website} alt="" />
        <a href={user.html_url} target="_blanck">
          {user.html_url === null ? "Not Available" : user.html_url}
        </a>
      </div>

      <div>
        <img src={Company} alt="" />
        <span>{user.company === null ? "Not Available" : user.company}</span>
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
      margin-right: 1rem;
    }

    a {
      color: ${(props) => (props.isClicked ? "#fff" : "#4B6A9B")};
      font-size: 0.9375rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-right: 1rem;
      text-decoration: none;
    }
  }
`;
