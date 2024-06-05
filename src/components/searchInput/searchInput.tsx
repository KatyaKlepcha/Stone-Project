import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

export const SearchInput = () => {
    return (
        <InputWrapper>
            <Search placeholder={'Поиск...'} autoFocus/>
            <Icon iconId={'search'} fill={'rgba(156, 156, 156, 1)'} width={'20'} height={'20'}/>
        </InputWrapper>
    );
};

const InputWrapper = styled.div`
  position: relative;
  margin-right: 20px;
  width: 100%;

  svg {
    position: absolute;
    top: 7px;
    right: 8px;
    bottom: 8px;
  }
`

const Search = styled.input`
  padding: 10px 8px 8px 16px;
  border: 1px solid rgba(156, 156, 156, 0.81);
  margin-left: 7px;
  background-color: transparent;

  &::placeholder {
    font-size: 13px;
    line-height: 20px;
    color: rgba(156, 156, 156, 1);
  }

  @media screen and (max-width: 990px) {
    width: 100%;
  }
`