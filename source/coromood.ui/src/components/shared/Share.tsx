import React from "react";
import styled from "styled-components";
import whatsapp from "../../images/social/whatsapp.png";
import facebook from "../../images/social/facebook.png";
import twitter from "../../images/social/twitter.png";

const ShareWrapper = styled.div`
  color: #b8b8b8;
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-evenly;
  > img {
    height: 25px;
    cursor: pointer;
  }
`;

export const Share = () => {
  return (
    <ShareWrapper>
      mit freunden teilen
      <IconWrapper>
        <img src={whatsapp} />
        <img src={facebook} />
        <img src={twitter} />
      </IconWrapper>
    </ShareWrapper>
  );
};
