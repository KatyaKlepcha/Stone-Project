import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Telephone} from "../../components/telephone/Telephone";
import {Icon} from "../../components/icon/Icon";
import {Container} from '../../components/Container';
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme.styled";
import {font} from "../../styles/Common";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={'column'} justify={'space-between'} wrap={'wrap'}>
                    <Information>
                        <LogoWrapper>
                            <Logo width={'268'} height={'108'}/>
                            <Slogan>Камень с душой</Slogan>
                        </LogoWrapper>
                        <Menu> <Title>Меню</Title>
                            <Item>Delivery & returns</Item>
                            <Item>FAQ</Item>
                            <Item>Contacts</Item>
                            <Item>Blog</Item>
                        </Menu>
                        <Catalog> <Title>Каталог</Title>
                            <Item>New arrivals</Item>
                            <Item>Trending now</Item>
                            <Item>Sales</Item>
                            <Item>Brands</Item>
                        </Catalog>
                        <Contacts><Title>Контакты для связи</Title>
                            <Item>Телефон:<Telephone/></Item>
                            <Item>Почта: <Mail>hello@createx.com</Mail></Item>
                            <SocialList>
                                <SocialItem>
                                    <SocialLink>
                                        <Icon iconId={'facebook'} viewBox = {'0 0 9 16'}/>
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink>
                                        <Icon iconId={'instagram'} viewBox = {'0 0 14 14'}/>
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink>
                                        <Icon iconId={'twitter'} viewBox = {'0 0 17 16'}/>
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink>
                                        <Icon iconId={'youTube'} viewBox = {'0 0 17 16'}/>
                                    </SocialLink>
                                </SocialItem>
                                <SocialItem>
                                    <SocialLink>
                                        <Icon iconId={'pinterest'} viewBox = {'0 0 17 16'}/>
                                    </SocialLink>
                                </SocialItem>
                            </SocialList>
                        </Contacts>
                    </Information>
                    <Address>674 Gonzales Drive. Washington, <span>PA 15301</span></Address>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: rgba(0, 0, 0, 1);
  position: relative;
`


const Title = styled.h5`
  margin-bottom: 12px;
`

const Information = styled.ul`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 41px 0 32px;

  ul {
    text-transform: uppercase;
    font-size: 16px;
    line-height: 26px;
    font-weight: 500;
  }

  @media ${theme.media.tablet} {
    height: 644px;
    flex-direction: column;
    padding: 0;

    ul:first-of-type {
      ${Title} {
        margin-bottom: 5px;
      }
    }

    ul:nth-of-type(2) {
      ${Title} {
        margin-bottom: 9px;
      }
    }

    ul:nth-of-type(3) {
      ${Title} {
        margin-bottom: 10px;
      }
    }
  }
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  align-items: center;

  @media ${theme.media.tablet} {
    img {
      width: 164px;
      height: 66px;
      
    }

    svg: {
      fill: red;
    }
  }
`

const Slogan = styled.div`
  align-self: center;
  margin-top: -20px;
  opacity: 0.6;

  @media ${theme.media.tablet} {
    font-size: 12px;
    margin-top: -12px;
  }
`

const Menu = styled.ul`

`

const Item = styled.li`
  cursor: pointer;
  opacity: 0.6;
  text-transform: none;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`

const Catalog = styled.ul`

`

const Contacts = styled.ul`
`

const Mail = styled.span`
  opacity: 0.6;
`

const Address = styled.div`
  align-self: center;
  margin: 20px 0 24px;
  ${font({lineHeight: '28px', Fmax: 16, Fmin: 13})} @media ${theme.media.tablet} {
    line-height: 15px;
    text-align: center;
    margin: 15px 68px 0;

    span {
      display: block;
    }
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  @media ${theme.media.tablet} {
    margin: 11px 0 45px;
    max-width: 400px;
  }
`

const SocialItem = styled.li`
  background-color: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;

  @media ${theme.media.tablet} {
    width: 53px;
    height: 53px;
  }
`

const SocialLink = styled.a`
  //width: fit-content;
  //height: fit-content;
  margin-top: 5px;
  
   svg {
     width: 16px;
     height: 16px;
   }

  @media ${theme.media.tablet} {
    svg {
      width: 26px;
      height: 26px;
    }
  }
`
