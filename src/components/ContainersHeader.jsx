import React from "react";
import ProfileImage from "../../public/images/profile-image.png";
import styled from "styled-components";

export default function ContainersHeader() {
  return (
    <Box>
      <img src={ProfileImage} alt="" />
    </Box>
  );
}

const Box = styled.div`

  img {
    width: 7.3125rem;
    height: 7.3125rem;
    flex-shrink: 0;
    border-radius: 50%;
  }
`;
