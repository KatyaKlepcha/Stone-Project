import React from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/button/Button";

export const Information = () => {
    return (
            <StyledInformation>
                <Tagline>Камень с душой</Tagline>
                <Title>Каменные изделия
                    <TitleSpan>для вашего дома</TitleSpan>
                </Title>
                <WrapperBtn>
                    <InfoBtn name={'Рассчитать стоимость'}/>
                    <InfoBtn name={'Связаться с нами'} color={'rgba(255, 255, 255, 0.03)'}/>
                </WrapperBtn>
            </StyledInformation>
    );
};

const StyledInformation = styled.div`
  position: absolute;
  right: 480px;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
  width: 744px;
  padding: 68px 40px 58px 102px;
  transform: translateX(-86px);
`

const Tagline = styled.div`
  display: flex;
  align-items: center;
  color: rgba(156, 156, 156, 1);


  &::after {
    content: ' ';
    width: 82px;
    height: 4px;
    background-color: rgba(156, 156, 156, 1);
    display: block;
    margin-left: 11px;
  }
`

const Title = styled.h1`
  font-size: 50px;
  line-height: 59px;
  font-weight: 400;
  text-transform: uppercase;
`

const TitleSpan = styled.span`
  display: inline-block;
  color: rgba(40, 85, 63, 1);
`

const WrapperBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`

const InfoBtn = styled(Button)`
  width: 288px;
  height: 68px;
`
