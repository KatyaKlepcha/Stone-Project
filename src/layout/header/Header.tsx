import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Contacts} from "../../components/contacts/Contacts";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items = ['каталог', 'акции', 'блог', 'сотрудничество', 'оплата и доставка']
export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    <FlexWrapper direction={'column'} justify={'space-around'}>
                        <Contacts/>
                        <HeaderMenu menuItems = {items}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )

}

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(17, 17, 17, 0.8);
  padding: 21px 0;
`