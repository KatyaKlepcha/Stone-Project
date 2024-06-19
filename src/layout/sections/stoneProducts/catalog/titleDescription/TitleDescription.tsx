import React, {FC} from 'react';
import {Icon} from "../../../../../components/icon/Icon";
import styled, {css} from "styled-components";

type TitleDescriptionPropsType = {
    onClickHandler: () => void
    name: string
    isOpen: boolean
}

export const TitleDescription: FC<TitleDescriptionPropsType> = ({onClickHandler, name, isOpen}) => {

    const onTitleClickHandler = () => {
        onClickHandler()
    }

    return (
        <StyledTitleDescription onClick={onTitleClickHandler} isOpen={isOpen}>
            <Wrapper>
                <Name>
                    {name}
                </Name>
                <Icon iconId={'arrowDescription'} width={'20'} height={'20'}/>
            </Wrapper>
        </StyledTitleDescription>
    );
};

export const StyledTitleDescription = styled.div<{ isOpen: boolean }>`
  
  svg {
    margin-left: 5px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      transform: rotate(180deg);
    `}
`

export const Wrapper = styled.div`
  display: flex;
`

export const Name = styled.div`
  font-size: 17px;
  line-height: 20px;
`