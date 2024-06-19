import React, {FC} from 'react';
import {Icon} from "../../../../../components/icon/Icon";
import styled from "styled-components";
import {theme} from "../../../../../styles/Theme.styled";

type OrderInfoPropsType = {
    title: string
    text: string
}

export const OrderInfo: FC<OrderInfoPropsType> = ({title, text}) => {
    return (
        <StyledOrderInfo>
            <TitleContainer>
                <TitleWrapper>
                    <Icon iconId={'check'} width={'18'} height={'18'}/>
                    <Title>{title}</Title>
                </TitleWrapper>
            </TitleContainer>
            <p>{text}
            </p>
        </StyledOrderInfo>
    );
};

const StyledOrderInfo = styled.div`
  width: calc(100% / 3);

  p {
    padding: 0 20px 0 0;
  }
`

const TitleContainer = styled.div`
  display: flex;
  border-bottom: 4px solid rgba(237, 243, 243, 1);
  margin: 58px 0 20px;

  svg {
    margin-right: 12px;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  padding: 0 0 28px;

  &::after {
    position: absolute;
    content: '';
    background-color: ${theme.colors.accent};
    height: 4px;
    width: 100%;
    bottom: -4px;
    left: 0;
  }
`

const Title = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
`
