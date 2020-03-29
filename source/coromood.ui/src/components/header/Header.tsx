import React from "react";
import {} from "semantic-ui-react";
import styled from "styled-components";
import Logo from "../../images/logo.png";

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  color: #cacaca;

  > img {
    height: 50px;
  }

  > p {
    margin-right: 10px;
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo}></img>
      <p>Wir sind nicht Kommerziell.</p>
    </HeaderWrapper>
  );
};
