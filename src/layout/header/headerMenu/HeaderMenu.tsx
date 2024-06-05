import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled";
import {HeaderNavigation} from "../headerNavigation/headerNavigation";

export const HeaderMenu = () => {

    return (
        <StyledHeaderMenu>
            <HeaderNavigation/>
        </StyledHeaderMenu>
    );
};

export const StyledHeaderMenu = styled.nav`
  background-color: rgba(0, 0, 0, 1);
  margin-right: -83px;
  padding: 13px 83px 14px 38px;
  width: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    max-width: 1000px;
    width: 100%;
  };

  @media screen and (max-width: 1290px) {
    margin-right: 0;
    padding: 13px 38px 14px 38px
  }

  @media screen and (max-width: 990px) {
    display: none;
  }
`

