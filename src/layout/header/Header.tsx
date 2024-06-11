import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Contacts} from "../../components/contacts/Contacts";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import React from "react";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {theme} from "../../styles/Theme.styled";

export const Header = () => {

    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenuWrapper>
                        <Contacts/>
                        <HeaderMenu/>
                    </HeaderMenuWrapper>
                </FlexWrapper>
                <MobileMenu/>
            </Container>
        </StyledHeader>
    )

}

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: rgba(17, 17, 17, 0.8);
  padding: 21px 0;

  ${Container} {
    padding: 0;
  }

  @media screen and (max-width: 1290px) {
    ${FlexWrapper} {

      a > img {
        width: 200px;
      }
    }
  }

  @media screen and (max-width: 990px) {
    background-color: rgba(0, 0, 0, 1);

    ${Container} {
      padding: 0 14px 0 0;
    }

    ${FlexWrapper} {
      align-items: flex-start;
    }

    a {
      margin-left: 13px;
    }

    a > img {
      position: relative;
      z-index: 12;
    }
  }
}

@media ${theme.media.tablet} {
  ${FlexWrapper} {
    a {
      margin-left: 13px;
    }

    a > img {
      width: 93px;
      height: 37px;
    }
  }
`

const HeaderMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-grow: 1;
`

