import React from 'react';
import AdvantagesIcon from "../../../../components/assets/images/AdvantagesIcon.png";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme.styled";

export const AdvantagesList = () => {
    return (
        <AdvantagesListStyled>
            <NumberedList>
                <li>
                    <Details>
                        <Summary>Новейшее итальянское оборудование DONATON<IconWrapper><ListIcon
                            iconId={'arrow'}/></IconWrapper></Summary>
                        <p>С его помощью мы
                            производим необычные
                            формы, изготавливаем сложные нестандартные изделия </p>
                    </Details>
                </li>
                <li>
                    <Details>
                        <Summary>Собственное произодство<IconWrapper><ListIcon
                            iconId={'arrow'}/></IconWrapper></Summary>
                        С его помощью мы
                        производим необычные
                        формы, изготавливаем сложные нестандартные изделия

                    </Details>
                </li>
                <li>
                    <Details>
                        <Summary>Широкий ассортимент разнообразных
                            камней<IconWrapper><ListIcon iconId={'arrow'}/></IconWrapper></Summary>
                    </Details>
                </li>
                <li>
                    <Details>
                        <Summary>Изделия
                            из наличия<IconWrapper><ListIcon iconId={'arrow'}/></IconWrapper>
                        </Summary>
                    </Details>
                </li>
                <li>
                    <Details>
                        <Summary>Работаем под ключ<IconWrapper><ListIcon iconId={'arrow'}/></IconWrapper></Summary>
                    </Details>
                </li>
                <li>
                    <Details>
                        <Summary>Консультации по уходу за изделием из
                            камня<IconWrapper><ListIcon iconId={'arrow'}/></IconWrapper></Summary>
                    </Details>
                </li>
            </NumberedList>
            <AdvantageImg src={AdvantagesIcon} alt={'Advantage Icon'}></AdvantageImg>
        </AdvantagesListStyled>
    );
};

const AdvantagesListStyled = styled.div`
  position: relative;

`
const NumberedList = styled.ol`
  counter-reset: numbers 00;
  display: grid;
  grid-template-columns: 1fr 370px 1fr;
  padding: 100px 0;
  border: 1px solid red;
  row-gap: 64px;

  li {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 20px;
    counter-increment: numbers 01;
    width: 100%;

    &::after {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;


      width: 46px;
      height: 46px;
      border-radius: 50%;
      content: counter(numbers, decimal-leading-zero);
      color: ${theme.colors.font};
      background-color: ${theme.colors.accent};
    }

    &:nth-child(-1n+3) {
      justify-self: flex-start;

      &::after {
        right: 0;
      }
    }

    &:nth-child(n+4):nth-child(-n+6) {
      justify-self: flex-end;

      ::after {
        left: 0;
      }
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

const Details = styled.details`
  //summary::-webkit-details-marker {
  //  display: none;
  //}
  width: 100%;
`

const IconWrapper = styled.div`
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accent};
  }
`

const ListIcon = styled(Icon)`
  cursor: pointer;
  fill: red;
  width: 8px;
  height: 14px;
  transform: rotate(-90deg);


`

const Summary = styled.summary`

  list-style: none;

  //&::-webkit-details-marker {
  //  display: none
  //}
`

const AdvantageImg = styled.img`
  max-width: 370px;
  max-height: 590px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  border: 7px solid ${theme.colors.accent};
  top: 0;
  left: 35%;
`