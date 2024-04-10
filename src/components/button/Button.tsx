import React, {FC} from 'react';
import styled from "styled-components";

type ButtonType = {
    name: string
    className?: string
    onClick?: () => void
}

export const Button: FC<ButtonType> = ({name, className, onClick}) => {
    return (
        <StyledButton className={className} onClick={onClick}>
            {name}
        </StyledButton>
    )
};


export const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  color: rgb(255, 255, 255);

`