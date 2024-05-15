import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Text} from "../../../components/link/Link";
import {theme} from "../../../styles/Theme.styled";
import {NavLink} from "react-router-dom";

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    const onPopupHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <StyledMobileMenu>
            <BurgerButton isOpen={isOpen} onClick={onPopupHandler}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={isOpen} onClick={onPopupHandler}>
                <ul>
                    <ListItem><LinkMenu to={'/catalog'}>каталог</LinkMenu></ListItem>
                    <ListItem><LinkMenu to={'/sale'}>акции</LinkMenu></ListItem>
                    <ListItem><LinkMenu to={'/'}>блог</LinkMenu></ListItem>
                    <ListItem><LinkMenu to={'/'}>сотрудничество</LinkMenu></ListItem>
                    <ListItem><LinkMenu to={'/'}>оплата и доставка</LinkMenu></ListItem>
                </ul>
            </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

export const StyledMobileMenu = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 36px;
  height: 24px;
  z-index: 1000;
  right: 0;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before, &::after {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
    }

    &::before {
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 10;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 70px;
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
