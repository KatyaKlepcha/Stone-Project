import React, {useState} from 'react';
import styled from "styled-components";
import {Button} from "../../../../components/button/Button";
import {Modal} from "../../../modal/Modal";
import {theme} from "../../../../styles/Theme.styled";
import {font} from "../../../../styles/Common";

export const Information = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <>
            <StyledInformation>
                <Tagline>Камень с душой</Tagline>
                <Title>Каменные изделия
                    <TitleSpan>для вашего дома</TitleSpan>
                </Title>
                <WrapperBtn>
                    <InfoBtn onClick={openModal} name={'Рассчитать стоимость'}/>
                    <InfoBtn background={'rgba(255, 255, 255, 0.03)'} name={'Связаться с нами'}/>
                </WrapperBtn>
            </StyledInformation>
            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}/>
        </>
    );
};

const StyledInformation = styled.div`
  position: absolute;
  right: 480px;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 1);
  max-width: 744px;
  width: 100%;
  padding: 68px 40px 58px 102px;
  transform: translateX(-86px);

  @media ${theme.media.tablet} {
    background-color: transparent;
    padding: 0;
    transform: none;
  }
`

const Tagline = styled.div`
  display: flex;
  align-items: center;
  color: rgba(156, 156, 156, 1);
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;


  &::after {
    content: ' ';
    width: 82px;
    height: 0.4px;
    background-color: rgba(156, 156, 156, 1);
    display: block;
    margin-left: 11px;
  }
`

const Title = styled.h1`
  ${font({lineHeight: '58px', Fmax: 50, Fmin: 28})}
  text-transform: uppercase;

  @media ${theme.media.tablet} {
    line-height: 34px;
    margin: 16px 0 48px;
  }
`

const TitleSpan = styled.span`
  display: block;
  color: ${theme.colors.accent};
`

const WrapperBtn = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;

  @media ${theme.media.tablet} {
    flex-direction: column;
    gap: 15px;
  }
  
  button:nth-child(2){
    background-color: rgba(20, 20, 20, 1);
  }
`

const InfoBtn = styled(Button)`
  width: 288px;
  height: 68px;
  ${font({lineHeight: '18px', Fmax: 16, Fmin: 15})}

  @media ${theme.media.tablet} {
    width: 100%;
    line-height: 17px;
  }
`
