import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

type SeeAllPropsType = {
    onClick?: () => void;
    text?: string;
    className?: string;
}

export const SeeAll: FC<SeeAllPropsType> = ({onClick, text, className}) => {

    return (
        <StyledSeeAll onClick={onClick} className={className}>
            <Text>{text}</Text>
            <Icon iconId={'arrowRight'} width={'36'} height={'9'} viewBox="0 0 36 9"/>
        </StyledSeeAll>
    );
};

export const StyledSeeAll = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  

  svg {
    fill: rgba(40, 42, 48, 1);
  }

`

const Text = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  color: rgba(40, 42, 48, 1);
`




