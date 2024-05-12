import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Contacts} from "../../components/contacts/Contacts";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <FlexWrapper direction={'column'} justify={'space-around'}>
                        <Contacts/>
                        <HeaderMenu/>
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
  z-index: 3;
  background-color: rgba(17, 17, 17, 0.8);
  padding: 21px 0;
  
  ${Container} {
    padding: 0;
  }
`