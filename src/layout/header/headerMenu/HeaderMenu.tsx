import React from 'react';
import styled from "styled-components";
import {CommonLink, Text} from "../../../components/link/Link";

export const HeaderMenu = () => {

    return (
        <StyledHeaderMenu>
            <ul>
                <ListItem><LinkMenu text={'каталог'} to={'/catalog'}/></ListItem>
                <ListItem><LinkMenu text={'акции'} to={'/sale'}/></ListItem>
                <ListItem><LinkMenu text={'блог'} to={'/'}/></ListItem>
                <ListItem><LinkMenu text={'сотрудничество'} to={'/'}/></ListItem>
                <ListItem><LinkMenu text={'оплата и доставка'} to={'/'}/></ListItem>
            </ul>
        </StyledHeaderMenu>
    );
};

export const StyledHeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 1);
  //margin-top: 24px;
  padding: 13px 0 14px 38px;

  ul {
    display: flex;
    align-items: center;
    gap: 90px;
  }
`

const ListItem = styled.li`

`

const LinkMenu = styled(CommonLink)`
  
  &:visited {
    border-bottom: 2px solid rgba(255, 255, 255, 1);
  }

  ${Text} {
    font-size: 18px;
    line-height: 20px;
  }

`
