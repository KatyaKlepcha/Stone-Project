import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Telephone} from "../../components/telephone/Telephone";
import {Icon} from "../../components/icon/Icon";
import ArrowUp from '../../components/assets/images/arrowUp.svg'
import {theme} from "../../styles/Theme.styled";

export const Footer = () => {
    return (
        <StyledFooter>
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
                            <SocialLink><Icon iconId={'facebook'} width={'16'} height={'16'}/></SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink><Icon iconId={'instagram'} width={'16'} height={'16'}/></SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink><Icon iconId={'twitter'} width={'16'} height={'16'}/></SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink><Icon iconId={'youTube'} width={'16'} height={'16'}/></SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink><Icon iconId={'pinterest'} width={'16'} height={'16'}/></SocialLink>
                        </SocialItem>
                    </SocialList>
                </Contacts>
            </Information>
            <Address>674 Gonzales Drive. Washington, PA 15301</Address>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 1);
  position: relative;
`

const Information = styled.ul`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 41px 0 32px;
`

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`

const Slogan = styled.div`
  align-self: center;
  margin-top: -20px;
  opacity: 0.6;
`

const Menu = styled.ul`
  text-transform: uppercase;
`

const Title = styled.h5`
  margin-bottom: 12px;
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
  text-transform: uppercase;
`

const Contacts = styled.ul`
  text-transform: uppercase;
`

const Mail = styled.span`
  opacity: 0.6;
`

const Address = styled.div`
  align-self: center;
  margin: 20px 0 24px;
`

const SocialList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`

const SocialItem = styled.li`
  background-color: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
`

const SocialLink = styled.a`
`
