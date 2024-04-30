import React from 'react';
import styled from "styled-components";
import {SectionHeader} from "../../../components/sectionHeader/SectionHeader";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {AdvantagesList} from "./AdvantagesList/AdvantagesList";

export const Advantages = () => {
    return (
        <StyledAdvantages>
            <Container>
                <FlexWrapper direction={'column'}>
                    <AdvantagesHeader>наши преимущества - <div>ваш результат</div></AdvantagesHeader>
                    <AdvantagesList/>
                </FlexWrapper>
            </Container>
        </StyledAdvantages>
    );
};

const StyledAdvantages = styled.section`
  color: rgba(40, 42, 48, 1);

  ${Container} {
    padding: 60px 0 65px;
  }
`

const AdvantagesHeader = styled(SectionHeader)`
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`






