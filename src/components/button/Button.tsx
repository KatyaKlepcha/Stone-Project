import React, {FC, ReactElement} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

type ButtonType = {
    name: string | ReactElement
    className?: string
    onClick?: () => void
    color?: string
    background?: string
}

export const Button: FC<ButtonType> = ({name, className, onClick, color}) => {
    return (
        <StyledButton className={className} onClick={onClick} color={color} >
            {name}
        </StyledButton>
    )
};


export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  color: ${props => props.color || theme.colors.font};
  background: ${props => props.color || theme.colors.accent};
`