import React, {FC} from 'react';
import styled from "styled-components";

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
    background-color: rgba(40, 85, 63, 1);
    position: absolute;
    margin-top: -9px;
  }

  div {
    color: rgba(40, 85, 63, 1);
  }
`