import React from "react";
import {} from "semantic-ui-react";
import styled from "styled-components";
import Logo from "../../images/logo.png";
import Usa from "../../images/usa.svg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  color: #cacaca;
  padding-top: 20px;

  > img {
    height: 40px;
  }

  > p {
    margin: 20px;
  }
`;

const InfoActionWrapper = styled.div`
  width: 330px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > button {
    background-color: transparent;
    border: 1px solid #b8b8b8;
    border-radius: 25px;
    height: 40px;
    color: #b3b3ff;
    cursor: pointer;

    > img {
      height: 10px;
      width: 20px;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <img src={Logo}></img>
      <InfoActionWrapper>
        <p>Wir sind nicht Kommerziell.</p>
        <button>{<img src={Usa}></img>} US/English Version</button>
      </InfoActionWrapper>
    </HeaderWrapper>
  );
};
