import React, {useState} from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";
import {FlexWrapper} from "../FlexWrapper";
import {SearchInput} from "../searchInput/searchInput";

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
                    <SearchInput/> :
                    <IconContact iconId={'search'} width={'23'} height={'23'} onIconClick={onIconClickHandler}/>}
            </FlexWrapper>
        </StyledContacts>
    );
};

export const StyledContacts = styled.div`
  display: flex;
  z-index: 11;
  margin-bottom: 24px;

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
      font-size: 14px;
      line-height: 18px;
    }
  }

  @media screen and (max-width: 990px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    width: 100%;
    margin-bottom: 8px;

    ${FlexWrapper}:nth-child(2) {
      display: none;
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
