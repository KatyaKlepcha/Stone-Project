import React from 'react';
import AdvantagesIcon from "../../../../components/assets/images/AdvantagesIcon.png";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from "../../../../styles/Theme.styled";

export const AdvantagesList = () => {

    return (
        <AdvantagesListStyled>
            <NumberedList>
                <List>
                    <Details>
                        <Summary>Новейшее итальянское оборудование DONATON
                            <IconWrapper>
                                <ListIcon iconId={'arrow'}/>
                            </IconWrapper>
                        </Summary>
                        <span>С его помощью мы
                            производим необычные
                            формы, изготавливаем сложные нестандартные изделия </span>
                    </Details>
                </List>
                <List>
                    <Details>
                        <Summary >Собственное <div>произодство</div>
                            <IconWrapper>
                                <ListIcon iconId={'arrow'}/>
                            </IconWrapper>
                        </Summary>
                        <span> С его помощью мы
                        производим необычные
                        формы, изготавливаем сложные нестандартные изделия</span>
                    </Details>
                </List>
                <List>
                    <Details>
                        <Summary>Широкий ассортимент разнообразных камней
                            <IconWrapper>
                                <ListIcon iconId={'arrow'}/>
                            </IconWrapper>
                        </Summary>
                        <span>С его помощью мы
                        производим необычные
                        формы, изготавливаем сложные нестандартные изделия</span>
                    </Details>
                </List>
                <List>
                    <Details>
                        <Summary>Изделия <div>из наличия</div>
                            <IconWrapper>
                                <ListIcon iconId={'arrow'}/>
                            </IconWrapper>
                        </Summary>
                        <span>С его помощью мы
                        производим необычные
                        формы, изготавливаем сложные нестандартные изделия</span>
                    </Details>
                </List>
                <List>
                    <Details>
                        <Summary >Работаем под <div>ключ</div>
                            <IconWrapper>
                                <ListIcon iconId={'arrow'}/>
                            </IconWrapper>
                        </Summary>
                        <span>С его помощью мы
                        производим необычные
                        формы, изготавливаем сложные нестандартные изделия</span>
                    </Details>
                </List>
                <List>

                    <Details>
                        <Summary>Консультации по уходу за изделием из
                            камня<IconWrapper>
                                <ListIcon iconId={'arrow'}/>
                            </IconWrapper>
                        </Summary>

                        <span>С его помощью мы
                        производим необычные
                        формы, изготавливаем сложные нестандартные изделия</span>
                    </Details>
                </List>
            </NumberedList>
            <AdvantageImg src={AdvantagesIcon} alt={'Advantage Icon'}></AdvantageImg>
        </AdvantagesListStyled>
    )
        ;
};

const AdvantagesListStyled = styled.div`
  position: relative;
`

const Details = styled.details`
  width: 100%;
    // border-bottom: 1px solid ${theme.colors.accent};
  position: relative;
  padding-bottom: 10px;

  &::before {
    content: '';
    position: absolute;
    width: 90%;
    height: 1px;
    background-color: ${theme.colors.accent};
    bottom: 0;
    left: 25px;
  }

  &[open] > summary {

    svg {
      transform: rotate(90deg);
    }
  }
  
  span {
    display: inline-block;
    width: 90%;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  bottom: 7px;
`

const NumberedList = styled.ol`
  counter-reset: numbers 00;
  display: grid;
  grid-template-columns: 1fr 370px 1fr;
  padding: 125px 0;
  border: 1px solid red;
  row-gap: 64px;
`

const List = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  counter-increment: numbers 01;
  width: 100%;
  height: 60px;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   width: 80%;
  //   height: 1px;
  //   background-color: ${theme.colors.accent};
  //   bottom: -7px;
  // }

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
    bottom: -50%
  }


  &:nth-child(-1n+3) {
    justify-self: flex-start;
    padding-right: 40px;

    &::before {
      left: 25px;
    }

    &::after {
      right: 40px;
    }
  }

  &:nth-child(n+4):nth-child(-n+6) {
    text-align: right;
    padding-left: 40px;

    &::before {
      left: 50px;
    }

    &::after {
      left: 40px;
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

    ${Details} {
      &::after {
        left: 15px;
      }

      ${IconWrapper} {
        right: 10px;
      }
    }
  }
`

const ListIcon = styled(Icon)`
  cursor: pointer;
  fill: ${theme.colors.accent};
  width: 10px;
  height: 16px;
  transform: rotate(-90deg);
  position: absolute;
  top: 50%;
`

const Summary = styled.summary`

  list-style: none;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  padding-bottom: 20px;
`

const AdvantageImg = styled.img`
  height: 590px;
  width: 370px;
  object-fit: cover;
  position: absolute;
  border: 7px solid ${theme.colors.accent};
  //top: 50%;
  //left: 50%;
  //transform: translate(-50%, 50%);
  top: 0;
  left: 35%;
`