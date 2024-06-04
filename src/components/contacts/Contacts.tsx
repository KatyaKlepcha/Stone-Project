import React, {useState} from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../FlexWrapper";
import {MobileMenu} from "../../layout/header/mobileMenu/MobileMenu"

export const Contacts = () => {
    const [searchMode, setSearchMode] = useState(false)

    const onIconClickHandler = () => {
        setSearchMode(!searchMode)
    }

    return (
        <StyledContacts>
            <FlexWrapper align='center'>
                {/*<ViberLink>*/}
                <Icon iconId={'viber'} width={'20'} height={'20'}/>
                {/*</ViberLink>*/}
                <Icon iconId={'phone'} width={'20'} height={'20'}/>
                <span>+7 (499) 258-625-33</span>
            </FlexWrapper>
            <FlexWrapper align={'center'} justify={'flex-end'}>
                {searchMode ?
                    (<InputWrapper>
                        <Search placeholder={'Поиск...'} autoFocus/>
                        <Icon iconId={'search'} fill={'rgba(156, 156, 156, 1)'} width={'20'} height={'20'}/>
                    </InputWrapper>) :
                    <IconContact iconId={'search'} width={'23'} height={'23'} onIconClick={onIconClickHandler}/>}
                <MobileMenu/>
            </FlexWrapper>
        </StyledContacts>
    );
};

export const StyledContacts = styled.div`
  display: flex;
  //max-width: max-content;
  z-index: 11;
  //width: 100%;

  svg {
    cursor: pointer;
  }

  div > svg ~ svg {
    margin: 0 7px 0 16px;
  }

  span {
    font-size: 18px;
    line-height: 22px;

    @media ${theme.media.tablet} {
      font-size: 16px;
      line-height: 18px;
    }
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    width: 100%;
    
    ${FlexWrapper} {
      justify-content: flex-end;
      width: 100%;
      //display: block;
    }
  }
`

const ViberLink = styled.a`
  cursor: pointer;
`

const IconContact = styled(Icon)`
  margin: 0 10px 0 24px;
  fill: ${theme.colors.font};
`

const InputWrapper = styled.div`
  position: relative;
  margin-right: 20px;
  width: 100%;

  // @media ${theme.media.tablet} {
  //   width: 100%;
  // }

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

  @media ${theme.media.tablet} {
    width: 100%;
  }
`
