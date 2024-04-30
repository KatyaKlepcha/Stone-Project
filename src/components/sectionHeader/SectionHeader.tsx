import React, {FC} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

type SectionHeaderPropsType = {
    children: React.ReactNode
    className?: string
}

export const SectionHeader: FC<SectionHeaderPropsType> = ({children, className}) => {
    return <TitleSectionHeader className={className}>{children}</TitleSectionHeader>
};

export const TitleSectionHeader = styled.h3`
  text-transform: uppercase;
  color: rgba(40, 42, 48, 1);
  font-weight: 400;
  font-size: 40px;
  line-height: 46px;
  padding-top: 9px;

  &::before {
    content: '';
    display: block;
    width: 120px;
    height: 1px;
    background-color: ${theme.colors.accent};
    position: absolute;
    margin-top: -9px;
  }

  div {
    color: ${theme.colors.accent};
  }
`