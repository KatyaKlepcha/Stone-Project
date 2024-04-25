import React, {FC} from 'react';
import styled from "styled-components";

type HeaderMenuPropsType = {
    menuItems: Array<string>;
}

export const HeaderMenu: FC<HeaderMenuPropsType> = ({menuItems}) => {

    return (
        <StyledHeaderMenu>
            <ul>
                {menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}><Link href={''}>{item}</Link></ListItem>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

export const StyledHeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 1);
  margin-top: 38px;
  padding: 13px 0 14px 38px;

  ul {
    display: flex;
    gap: 90px;
  }
`

const ListItem = styled.li`

`

const Link = styled.a`
  text-transform: uppercase;
  color: #fff;
`
