import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Contacts = () => {
    return (
        <StyledContacts>
            <ViberLink><Icon iconId={'viber'} width={'20'} height={'20'}/></ViberLink>
            <Icon iconId={'phone'} width={'20'} height={'20'}/>
            <span>+7 (499) 258-625-33</span>
            <IconContact iconId = {'search'} width={'23'} height={'23'}/>
        </StyledContacts>
    );
};

export const StyledContacts = styled.div`
  display: flex;
  align-self: flex-end;
  
  svg:first-child {
    margin-right: 17px;
  }
  
  svg:nth-child(2){
    margin-right: 8px;
  }
  
  svg:last-child{
    margin-left: 20px;
  }
`

const ViberLink = styled.a`
    cursor: pointer;
`

const IconContact = styled(Icon)`
  
    &:last-child {
      
    }
`
