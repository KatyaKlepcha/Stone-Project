import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

export const Contacts = () => {
    return (
        <StyledContacts>
            <div>
                <ViberLink><Icon iconId={'viber'} width={'20'} height={'20'}/></ViberLink>
                <Icon iconId={'phone'} width={'20'} height={'20'}/>
                <span>+7 (499) 258-625-33</span>
            </div>
            <IconContact iconId={'search'} width={'23'} height={'23'}/>
        </StyledContacts>
    );
};

export const StyledContacts = styled.div`
  //display: flex;
  //align-self: flex-end;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, auto);
  justify-content: end;
  z-index: 11;

  svg:first-child {
    margin-right: 17px;
  }

  svg:nth-child(2) {
    margin-right: 8px;
  }

  svg:last-child {
    margin-left: 20px;
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
    align-items: flex-end;

    svg:last-child {
      margin-left: 0;
      margin-top: 8px;
    }
  }
`

const ViberLink = styled.a`
  cursor: pointer;
`

const IconContact = styled(Icon)`

  &:last-child {

  }
`
