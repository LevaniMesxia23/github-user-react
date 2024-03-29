import React from "react";
import ProfileImage from "../../public/images/profile-image.png";
import styled from "styled-components";

export default function ContainersHeader({ isClicked, setisClicked, user, setUser }) {
  return (
    <MainContainer>
      <div className="top-side">
        <ImageBox>
          <img src={ProfileImage} alt="" />
        </ImageBox>
      </div>

      <div className="bottom-side">
        <TitleAndDate isClicked={isClicked} user={user}>
          <span className="title">{user.login}</span>
          <span className="date">{user.created_at}</span>
        </TitleAndDate>

        <LinkBio isClicked={isClicked}>
          <span className="link">@octocat</span>
          <span className="bio">This profile has no bio</span>
        </LinkBio>
      </div>
    </MainContainer>
  );
}
const MainContainer = styled.div`
  display: flex;

  .top-side {
  }
`;
const ImageBox = styled.div`
  display: inline;
  img {
    width: 7.3125rem;
    height: 7.3125rem;
    flex-shrink: 0;
    border-radius: 50%;
  }
`;

const TitleAndDate = styled.div`
  margin-left: 2.31rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93%;

  .title {
    color: ${(props) => (props.isClicked ? "#FFF" : "#2b3442")};
    font-size: 1.625rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .date {
    color: ${(props) => (props.isClicked ? "#FFF" : "#697C9A")};
    text-align: right;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const LinkBio = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.31rem;

  .link {
    color: #0079ff;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 1.25rem;
    margin-top: 0.12rem;
  }
  .bio {
    width: 30rem;
    color: ${(props) => (props.isClicked ? "#FFF" : "#4B6A9B")};
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: 166.667%;
  }
`;
