import React from 'react';
import styled from "styled-components";
import {Button} from "../../button/Button";

export const Information = () => {
    return (
        <Wrapper>
            <Tagline>Камень с душой</Tagline>
            <Title>Каменные изделия
                <TitleSpan>для вашего дома</TitleSpan>
            </Title>
            <WrapperBtn>
                <PriceBtn name={'Рассчитать стоимость'}/>
                <ConnectionBtn name={'Связаться с нами'}/>
            </WrapperBtn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  //position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
  width: 743px;
  //height: 361px;
  padding: 0 41px 0 102px;
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

const PriceBtn = styled(InfoBtn)`
  background-color: rgba(40, 85, 63, 1);
`
const ConnectionBtn = styled(InfoBtn)`
  background-color: rgba(255, 255, 255, 0.03);
`
