import React from 'react';
import {CommonLink} from "../link/Link";
import {Container} from "../Container";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

export const ErrorPage = () => {
    return (
        <StyledErrorPage>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <h3>404</h3>
                    <Text>страница не найдена</Text>
                    <LinkOnMain to={'/'} text={'на главную'} />
                </FlexWrapper>
            </Container>
        </StyledErrorPage>
    );
};

const StyledErrorPage = styled.div`
  
  ${Container} {
    padding: 116px 0 199px;
  }
    h3 {
      color: ${theme.colors.accent};
      font-size: 283px;
      line-height: 332px;
      font-weight: 400;
    }
`

const Text = styled.p`
  color: rgba(40, 42, 48, 1);
  font-size: 60px;
  line-height: 70px;
  text-transform: uppercase;
  padding: 60px 0 65px;
`

const LinkOnMain = styled(CommonLink)`
  background-color: ${theme.colors.accent};
  padding: 17px 30px;
`
