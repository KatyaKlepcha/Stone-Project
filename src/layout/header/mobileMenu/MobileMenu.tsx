import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme.styled";
import {HeaderNavigation, LinkMenu} from "../headerNavigation/headerNavigation";
import {SearchInput} from "../../../components/searchInput/searchInput";
import {Icon} from "../../../components/icon/Icon";

export const MobileMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [searchMode, setSearchMode] = useState(false)

    const onIconClickHandler = () => {
        setSearchMode(!searchMode)
    }

    const onPopupHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <StyledMobileMenu>
            {searchMode ?
                <SearchInput/> :
                <IconContact iconId={'search'} width={'23'} height={'23'} onIconClick={onIconClickHandler}/>}
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

  @media (max-width: 990px) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-top: -20px;
  }

  @media ${theme.media.tablet} {
    margin-top: 0;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
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
    position: absolute;
    top: 108px;

    li {

      padding: 29px 0;

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

    li + li {
      border-top: 0.4px solid ${theme.colors.font};
    }
  }
`

const IconContact = styled(Icon)`
  margin: 0 10px 0 24px;
  fill: ${theme.colors.font};
`
