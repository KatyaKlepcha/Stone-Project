import React from 'react';
import styled from "styled-components";
import AdvantageIcon from '../../../components/assets/images/AdvantageIcon.png'
import {SectionHeader} from "../../../components/sectionHeader/SectionHeader";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {StyledHeader} from "../../header/Header";

export const Advantages = () => {
    return (
        <StyledAdvantages>
            <Container>
                <FlexWrapper direction={'column'}>
                    <AdvantagesHeader>наши преимущества - <div>ваш результат</div></AdvantagesHeader>
                    <Lala>
                        <NumberedList>
                            <li>
                                <Details>
                                    <Summary>Новейшее итальянское оборудование DONATON</Summary>
                                    <p>С его помощью мы
                                        производим необычные
                                        формы, изготавливаем сложные нестандартные изделия </p>
                                </Details>
                            </li>
                            <li>
                                <Details>
                                    <Summary>Собственное произодство</Summary>
                                    С его помощью мы
                                    производим необычные
                                    формы, изготавливаем сложные нестандартные изделия

                                </Details>
                            </li>
                            <li>
                                <Details>
                                    <Summary>Широкий ассортимент разнообразных камней</Summary>
                                </Details>
                            </li>
                            <li>
                                <Details>
                                    <Summary>Изделия
                                        из наличия
                                    </Summary>
                                </Details>
                            </li>
                            <li>
                                <Details>
                                    <Summary>Работаем под ключ</Summary>
                                </Details>
                            </li>
                            <li>
                                <Details>
                                    <Summary>Консультации по уходу за изделием из камня</Summary>
                                </Details>
                            </li>
                        </NumberedList>
                        <AdvantageImg src={AdvantageIcon} alt={'Advantage Icon'}></AdvantageImg>
                    </Lala>
                </FlexWrapper>
            </Container>
        </StyledAdvantages>
    );
};

const StyledAdvantages = styled.section`
  color: rgba(40, 42, 48, 1);

  ${Container} {
    padding: 60px 0 65px;
  }
`

const AdvantagesHeader = styled(SectionHeader)`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`

const NumberedList = styled.ol`
  counter-reset: numbers 00;
  display: grid;
  grid-template-columns: 1fr 370px 1fr;
  padding: 100px 0;
  border: 1px solid red;
  row-gap: 64px;

  li {
    padding-left: 20px;
    counter-increment: numbers 01;

    &::after {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 46px;
      height: 46px;
      border-radius: 50%;
      content: counter(numbers, decimal-leading-zero);
      color: rgba(255, 255, 255, 1);
      background-color: rgba(40, 85, 63, 1);
    }

    &:nth-child(2) {
      grid-row-start: 2;
    }

    &:nth-child(3) {
      grid-row-start: 3;
    }

    &:nth-child(4), &:nth-child(5), &:nth-child(6) {
      grid-column-start: 3;
    }
  }
`


const Lala = styled.div`
  position: relative;
  
`
const Details = styled.details`
  //summary::-webkit-details-marker {
  //  display: none;
  //}

`

const Summary = styled.summary`

  &::after {
    content: '';
    display: block;
    width: 120px;
    height: 1px;
    background-color: rgba(40, 85, 63, 1);
  }
`

const AdvantageImg = styled.img`
  max-width: 370px;
  max-height: 590px;
  position: absolute;
  top: 0;
  left: 33%;
  //transform: translate(-50%, 50%);
`

