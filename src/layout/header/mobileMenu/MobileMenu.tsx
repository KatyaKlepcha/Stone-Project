import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {Text} from "../../../components/link/Link";
import {theme} from "../../../styles/Theme.styled";
import {NavLink} from "react-router-dom";
import {HeaderMenu} from "../headerMenu/HeaderMenu";
import {HeaderNavigation, LinkMenu} from "../headerNavigation/headerNavigation";
import {Container} from "../../../components/Container";

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
                    <HeaderNavigation/>
                </MobileMenuPopup>
        </StyledMobileMenu>
    );
};

export const StyledMobileMenu = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  /* position: fixed; */
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
  z-index: -1;
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    width: 90%;
    //text-align: left;
    //display: flex;
    //flex-direction: column;
    //align-items: center;
    //gap: 70px;

    li {

      padding: 29px 0;
      border-bottom: 0.4px solid ${theme.colors.font};

      a {
        padding: 0;
      }

      ${LinkMenu} {
        &.active {
          font-weight: bolder;

          &::after {
            display: none;
          }
        }
      }
    }

    & + li {
      border-bottom: 0.4px solid ${theme.colors.font};
    }
  }
`
