import React, {FC} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme.styled";

type LinkPropsType = {
    onClick?: () => void;
    text?: string;
    className?: string;
    color?: string
    isIcon?: boolean
}

export const Link: FC<LinkPropsType> = ({onClick, text, className, color, isIcon}) => {

    return (
        <StyledLink onClick={onClick} className={className} color={color}>
            <Text color={color}>{text}</Text>
            {isIcon && <Icon iconId={'arrowRight'} width={'36'} height={'9'} viewBox="0 0 36 9"/>}
        </StyledLink>
    );
};

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  

  svg {
    fill: ${props => props.color || theme.colors.font};
  }

`

export const Text = styled.p`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  color: ${props => props.color || theme.colors.font};
`




