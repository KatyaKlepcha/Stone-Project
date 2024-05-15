import React from 'react';
import styled from "styled-components";
import {Text} from "../../../components/link/Link";
import {theme} from "../../../styles/Theme.styled";
import {NavLink} from "react-router-dom";

export const HeaderMenu = () => {

    return (
        <StyledHeaderMenu>
            <ul>
                <ListItem><LinkMenu to={'/catalog'}>каталог</LinkMenu></ListItem>
                <ListItem><LinkMenu to={'/sale'}>акции</LinkMenu></ListItem>
                <ListItem><LinkMenu to={'/'}>блог</LinkMenu></ListItem>
                <ListItem><LinkMenu to={'/'}>сотрудничество</LinkMenu></ListItem>
                <ListItem><LinkMenu to={'/'}>оплата и доставка</LinkMenu></ListItem>
            </ul>
        </StyledHeaderMenu>
    );
};

export const StyledHeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 1);
  margin-right: -83px;
  padding: 13px 83px 14px 38px;

  ul {
    display: flex;
    align-items: center;
    gap: 70px;
  };

  @media ${theme.media.tablet} {
   display: none;
  }
`

const ListItem = styled.li`
  position: relative;
`

const LinkMenu = styled(NavLink)`
  color: ${theme.colors.font};
  text-transform: uppercase;
  font-weight: 400;
  font-size: 18px;
  padding: 0 10px;

  &.active {
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      border-bottom: 2px solid rgba(255, 255, 255, 1);
      background-color: ${theme.colors.font};
      height: 2px;
      width: 100%;
      bottom: -14px;
      left: 0;
      right: 0;
    }
  }

  ${Text} {
    font-size: 18px;
    line-height: 20px;
  }
`
