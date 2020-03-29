import React from "react";
import {} from "semantic-ui-react";
import styled from "styled-components";
import Logo from "../../images/logo.png";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  color: #cacaca;
  padding-top: 20px;

  > img {
    height: 60px;
  }

  > p {
    margin: 20px;
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
