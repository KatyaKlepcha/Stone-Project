import React, {FC} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

type ButtonType = {
    name: string
    className?: string
    onClick?: () => void
    color?: string
    background?: string
    border?: string
}

export const Button: FC<ButtonType> = ({name, className, onClick, color, background, border}) => {
    return (
        <StyledButton className={className} name={name} onClick={onClick} color={color}
                      background={background} border={border}>{name} </StyledButton>
    )
};


export const StyledButton = styled.button<ButtonType>`
  text-transform: uppercase;
  color: ${props => props.color || theme.colors.font};
  background: ${props => props.background || theme.colors.accent};
  border: ${props => props.border ? `1px solid ${props.border}` : 'none'};
`