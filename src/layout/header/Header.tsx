import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Contacts} from "../../components/contacts/Contacts";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <MenuWrapper>
                <Contacts/>
                <Menu/>
            </MenuWrapper>
        </StyledHeader>
    )

}

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: 74px;
`

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`