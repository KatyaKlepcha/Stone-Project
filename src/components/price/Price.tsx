import React, {FC} from 'react';
import {formatNumber} from "../../common/helpers/priceBreakdown";
import styled, {css} from "styled-components";

type PricePropsType = {
    price: number
    color?: string
    isOldPrice?: boolean
    weight?: number
    size?: string
}

export const Price: FC<PricePropsType> = ({price, color, isOldPrice, weight, size}) => {
    return (
        <StyledPrice color={color} isOldPrice={isOldPrice} price={price} weight={weight} size={size}>
            {formatNumber(price)} ₽
        </StyledPrice>
    );
};

const StyledPrice = styled.div<PricePropsType>`
  white-space: nowrap;
  color: ${props => props.color || 'rgba(0, 0, 0, 1)'};
  font-weight: ${props => props.weight || 400};
  font-size: ${props => props.size || '20px'};

  ${props => props.isOldPrice && css<{ isOldPrice?: boolean }>`
    text-decoration: line-through;
  `}
`